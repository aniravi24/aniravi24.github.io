---
title: "Migrating Away From Query Builders and ORMs in JavaScript/TypeScript"
author: "Ani Ravi"
date: Jun 12, 2020
tags: [ORMs, JavaScript, TypeScript]
description: Migrating Away From Query Builders and ORMs in JavaScript/TypeScript
---

I spent the better part of a day moving a project completely off of the ORM we were using (TypeORM). Ever since I started doing web development, I’ve been using some kind of heavy abstraction on top of my database. Whether it’s Mongoose when I used MongoDB, or TypeORM when I decided to move to TypeScript and PostgreSQL. However, it turns out that ORMs and query builders aren’t so great. I used to be that person that thought ORMs and query builders did the job for me, and I used it as an excuse to not learn SQL (which is what everyone tells you NOT to do). Given the tools that exist today, I would wholeheartedly recommend doing it the opposite of how I did if you’re starting off new to these things — write your SQL stuff by hand, or with help from the tools I mention later in the post. It’ll feel really slow at first, but you’ll thank yourself later 😄

I’m going to split this post up into three different parts: First, I’ll talk about why query builders and ORMs aren’t worth using. Second, I’ll explore specific issues I’ve had using ORMs like TypeORM — bugs that don’t actually exist when you directly interface with the DB using the popular driver library in your language or some helper functions. Third, I’ll walk through my current preferred tooling to create an ergonomic experience with the database from a Node.js project — we can replace everything the ORM used to do but better (migrations, typed database schemas and interactions, nice helper functions for simple queries, etc).

### Part 1: Why query builders and ORMs aren’t worth using

Query builders (e.g. [Knex.js](http://knexjs.org/)) in general are an unnecessary abstraction on top of the database — just write the SQL. Instead, you’re busy learning something on top of SQL chaining a bunch of functions together and trying to figure out how a specific tool works instead of how SQL works. You’re better off learning how SQL works instead of learning a specific query builder’s toolset. That knowledge is transferrable. SQL itself is also incredibly powerful, used everywhere, and likely won’t go away anytime soon. Even if you learn new backends or frontends, you’ll still be using SQL. A lot of these benefits are lost when you only work with query builders and ORMs. Also, it can start to get frustrating sometimes when you realize that you know how to do something in SQL, that you don’t know how to do with an ORM. You’ll try to do things the “ORM” way, to use the tooling provided.

Query builders and ORMs can offer things like sanitization, some type safety, and abstracting away dealing with conflicts with your primary indexes (sometimes), but these can be better handled with the tools I mention in part 3. Also, parameterized queries in [node-postgres](https://github.com/brianc/node-postgres) automatically sanitize your inputs — so the query builder doesn’t need to do that for you.

_Edit Dec 2020: Another thing ORMs/query builders are good for is being able to compose your queries — dynamic queries are easier to do since they are typically chained function calls._

### Part 2: Unnecessary problems and frustrations I’ve dealt with using ORMs like TypeORM

I’d often have to spend time debugging issues with the ORM, that the underlying Node.js PostgreSQL driver (the wonderful [node-postgres](https://github.com/brianc/node-postgres), which I’ll be calling “pg” from now on) didn’t actually have any issues with. Let me walk through a non-exhaustive list of problems I’ve had working with TypeORM. I’m picking on ORMs in general here, so this isn’t a bag on TypeORM.

  **Trying to use it with one-off scripts, [ts-node](https://www.npmjs.com/package/ts-node) or [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)**

I’ve had strange issues trying to use TypeORM with these tools — it’s been somewhat unpredictable. I know that for some of the scripts, I couldn’t get the files to run with ts-node, and required compiling it to JS. As soon as I removed TypeORM and used pg, it worked as expected. Handling database connections directly with [pg.Pool](https://node-postgres.com/api/pool/) and tools I mention in part 3 make this easy.


  **Working through the ORM, instead of utilizing the database directly**


The problem with tools like TypeORM is your entire database is managed through the ORM. It turns out that ORMs are actually not that powerful, at least not as powerful as SQL itself is. Managing your models in TypeORM leads to a lot of limitations. For example, something I often do in my database models is keep track of when a row was last updated. Doing this in TypeORM means that you do it at the JS layer, where TypeORM will get the current JS date and insert it. The problem with this is that it’s not happening at the source of truth — your database. If you try to do a query with TypeORM that doesn’t use one of its higher-level abstractions, you now have data inconsistency. You just changed some data but that column didn’t update. Instead, if you’re using Postgres, one option is to use Postgres’s triggers, so that if a row is modified at all, Postgres will do that work to figure out the rest.

Another major limitation is not being able to define models outside of code written in TypeScript. We had several tables in our database that I wrote into SQL but TypeORM had no awareness of (we stopped using TypeORM for migrations first, before removing the rest of it). I could’ve made model files for all of those tables so that TypeORM would be aware of them, but it wasn’t worth it. On top of this, TypeORM allows you to make junction tables when you define a many-to-many relationship for some of your information, but these can’t be queried directly without using the query builder or dropping down to plain SQL (losing all type safety).

  **Bulky, inefficient queries**

If you use TypeORM, go try something right now. Open your ormconfig.js (or .ts, .json, whichever one you use) and go add “logging”: true. Watch the queries. You might be amazed by 1. how long they are 2. how many there are 3. how inefficient and ugly they are sometimes. For example, a query as simple as
```sql
SELECT COUNT(“userId”)
FROM users_followers
where “userId”=’blah-uuid'
```
is actually this in TypeORM

```sql
SELECT “Users_followers_rc”.”userId” AS “parentId”, COUNT(“users”.”id”) AS “cnt”
FROM “users” “users”
INNER JOIN “users_followers” “Users_followers_rc”
ON “Users_followers_rc”.”userId”
IN (‘blah-uuid’)
AND “Users_followers_rc”.”followerId” = “users”.”id”
GROUP BY “Users_followers_rc”.”userId”
```

We’re often told that the ORM “takes care of the DB so you don’t have to do think about it”, but as I’ve done more development, I’ve learned that this is not the right approach. Your database is often the source of truth — and is also probably one of the slowest things in your entire stack, as it deals with stuff that’s persistent on disk, not memory like the rest of your stack probably does most of the time. Also, go check out what actually happens when you use save() in TypeORM. It makes sense when you think about it, but it’s probably more queries than you thought.

ORMs also often try to support many different SQL dialects or different environments. You may find that there are specific features of a DB, say, Postgres, that you want to use. Those constructs to write better queries might not be available to you if you use an ORM. You could argue that you should aim for portability, not to be tied to a DB — but we’ll cross that bridge if it ever matters.

  **Migrations? Meh..**

Another huge problem with ORMs is that the migrations they generate aren’t the best. For example, TypeORM will generate indices of any kind with some random string of characters. I still haven’t figured out why this is necessary unless a different dialect of SQL justifies it (I only use Postgres). So you might see a query like CREATE INDEX IDX\_2123asf67s6a3agab31a instead of the default convention that Postgres uses — which is easy to understand, and easy to work with. You can probably guess what it’s called without even looking at your database because the [convention](https://gist.github.com/popravich/d6816ef1653329fb1745) Postgres already uses is pretty straightforward.

Sometimes the migrations you’ll get are straight-up wrong, but that’s the nature of trying to automate stuff like this. Other times, it’ll add extra indices where it doesn’t need to, or you’ll stare at your migration and realize that the default stuff it uses or even the quality of the query is not that great. Your migrations will look a lot cleaner written by hand. When you let your ORM handle migrations for you, it can’t be smart enough often to deal with things like altering columns. TypeORM will often drop your column and make a new one — that’s not a real solution in a lot of cases, unfortunately. If you write your migration by hand, these are easily solvable problems.

Your migrations may also run more slowly if you need TypeScript to be compiled first. If you need to write any migrations by hand, you may notice that when you need to auto-generate migrations again, it might change or mess with the stuff you already modified (as expected, but that’s not what you would like in the ideal world). Also, does anyone actually do down migrations? More on this below in my preferred tools for doing migrations.

  **The defaults are not that good**

I noticed some of the default types TypeORM recommends from the JS layer are not likely what you want in Postgres. Don’t get me wrong — this is remedied by passing in parameters in the model decorators, but if you’re relying on TypeORM to take care of it for you, these are things you won’t know about. For example, by default, TypeORM will generate a timestamp without a time zone if you use a date column. It basically makes no sense to ever do this. Use timestamptz. Also, character varying without a parameter is the same as the TEXT type in Postgres (specifically in Postgres, YMMV with other SQL dialects). Fewer characters to type for you, same underlying representation.

  **Doesn’t feel like working with SQL (by design?)**

ORMs are designed to make you feel like the database is abstracted to work with your language of choice. Instead of feeling like you’re working with something where people actually understand SQL and databases and are trying to make that easier for you. It often doesn’t feel like that.

SQL is such a declarative language and reads like English that it’s often nicer to use it directly.

  **No type safety once you drop away from the high-level abstractions**

One general problem with ORMs is that the type safety only exists as long as you’re working through their abstractions. Once you need to drop to SQL, you lose type safety entirely. How could we make this at least somewhat better? More on this in part 3.

If I had to design an ORM from scratch, it would probably have a lot of these same problems. It’s probably better to not work with this abstraction in the first place if possible with your tooling of choice.

### Part 3: My preferred setup, getting all the goodies without the bad stuff

Now that you’ve read my mini-rant, let me share what my preferred tooling is today for completely moving off ORMs and query builders, as well as what the benefits are! Can we really have our cake and eat it too?

  **Replacing migrations**

Let’s start with migrations first! This one is easy. I use [https://github.com/graphile/migrate](https://github.com/graphile/migrate) (thanks [John Haley](https://medium.com/u/486409fe9425) for the recommendation!)

It’s super straightforward to use — you write your SQL files, and run a command. You can even run a watch command that will watch your file and execute the migrations as you work on it (I’ve never used this, personally). It’s also super fast — because it’s plain SQL. No JavaScript to deal with anywhere. The tool itself is built in TypeScript and uses pg under the hood. It’s fast.

  **Replacing the rest of the ORM**

A big inspiration for me writing this piece was a [project](https://github.com/jawj/mostly-ormless) I came across on GitHub a while ago. I initially didn’t want to go through it to implement it myself, but the wonderful author has made it an actual library. The package is called [Zapatos](https://jawj.github.io/zapatos/). With this, you can automatically generate TypeScript types from your database (originally inspired from a package called [Schemats](https://github.com/sweetiq/schemats#readme) which is now unmaintained), do somewhat type-checked SQL queries, and get nifty helpers along the way, up to the level of abstraction you’d like without going overboard. Remember how I was talking about needing to keep the DB in sync with the backend? I don’t need to do that anymore. Honestly, some of the helpers here are better than what ORMs I’ve seen offer — at least for the queries that I’d use the ORM for. I would highly recommend reading the documentation (it’s straightforward to understand) and taking a look at it yourself — I won’t do it justice.

> I see the questions already… But Ani, isn’t this just like another ORM?

If you use it, you’ll see that it’s not. It ultimately uses pg and has some nifty helpers to help you do better type-checking, and make certain queries easier. It does not try to write strangely complex queries, manage connection pooling, or do anything super fancy (although generating the types from your database for you is amazing and fancy in and of itself). It’ll convert whatever you pass it to pretty much the exact query you would write if you wrote it by hand (most of the time, with the exception of the highest abstractions near the bottom of the docs). It stays pretty lean in terms of what it offers and what it can do for you — most of it is ultimately on you to write a proper query. The files it generates are put directly into your project’s source code, so you can see exactly what it does.

### Bonus, Part 4: Abstracting the API itself

Gotten this far? I thought I’d give a shoutout to some of the tools that have come in recent years to help build backends faster. Tools like [PostGraphile](https://www.graphile.org/postgraphile/) generate a performant GraphQL API on top of your database. They invert the model and turn your development model into database driven design. It’ll teach you a lot about how to use your database’s powerful features instead of using it like a dummy data store you abstract away through code.

Thanks for reading! Please let me know if you have any feedback in the comments below. I haven’t been writing that much about programming-related topics so I thought I’d kick it off with a light intro to something I did recently.