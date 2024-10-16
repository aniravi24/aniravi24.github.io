(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{3226:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/move-off-orms-in-typescript",function(){return i(7682)}])},7682:function(e,t,i){"use strict";i.r(t),i.d(t,{useTOC:function(){return r}});var s=i(2676),a=i(2821),o=i(9075),n=i(1426);function r(e){return[{value:"Part 1: Why query builders and ORMs aren’t worth\xa0using",id:"part-1-why-query-builders-and-orms-arent-worthusing",depth:3},{value:"Part 2: Unnecessary problems and frustrations I’ve dealt with using ORMs like\xa0TypeORM",id:"part-2-unnecessary-problems-and-frustrations-ive-dealt-with-using-orms-liketypeorm",depth:3},{value:"Part 3: My preferred setup, getting all the goodies without the bad\xa0stuff",id:"part-3-my-preferred-setup-getting-all-the-goodies-without-the-badstuff",depth:3},{value:"Bonus, Part 4: Abstracting the API\xa0itself",id:"bonus-part-4-abstracting-the-apiitself",depth:3}]}t.default=(0,a.c)(function(e){let{toc:t=r(e)}=e,i={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",span:"span",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.em,{children:["Update Apr 2023: It’s been years since I wrote this and my views have changed quite a bit. While I think there are certainly trade-offs with any solution, the tools in TypeScript have gotten significantly better since I wrote this. As a codebase scales and you work with a team, writing raw queries is not particularly enjoyable. It’s nicer to have the shorter syntax that ORMs offer, not to mention the built-in type-checking. For example, ",(0,s.jsx)(i.a,{href:"https://prisma.io",children:"Prisma"})," and ",(0,s.jsx)(i.a,{href:"https://kysely.dev",children:"Kysely"})," are two cool projects at the time of this update."]})}),"\n",(0,s.jsx)(i.p,{children:"I spent the better part of a day moving a project completely off of the ORM we were using (TypeORM). Ever since I started doing web development, I’ve been using some kind of heavy abstraction on top of my database. Whether it’s Mongoose when I used MongoDB, or TypeORM when I decided to move to TypeScript and PostgreSQL. However, it turns out that ORMs and query builders aren’t so great. I used to be that person that thought ORMs and query builders did the job for me, and I used it as an excuse to not learn SQL (which is what everyone tells you NOT to do). Given the tools that exist today, I would wholeheartedly recommend doing it the opposite of how I did if you’re starting off new to these things — write your SQL stuff by hand, or with help from the tools I mention later in the post. It’ll feel really slow at first, but you’ll thank yourself later \uD83D\uDE04"}),"\n",(0,s.jsx)(i.p,{children:"I’m going to split this post up into three different parts: First, I’ll talk about why query builders and ORMs aren’t worth using. Second, I’ll explore specific issues I’ve had using ORMs like TypeORM — bugs that don’t actually exist when you directly interface with the DB using the popular driver library in your language or some helper functions. Third, I’ll walk through my current preferred tooling to create an ergonomic experience with the database from a Node.js project — we can replace everything the ORM used to do but better (migrations, typed database schemas and interactions, nice helper functions for simple queries, etc)."}),"\n",(0,s.jsx)(i.h3,{id:t[0].id,children:t[0].value}),"\n",(0,s.jsxs)(i.p,{children:["Query builders (e.g. ",(0,s.jsx)(i.a,{href:"http://knexjs.org/",children:"Knex.js"}),") in general are an unnecessary abstraction on top of the database — just write the SQL. Instead, you’re busy learning something on top of SQL chaining a bunch of functions together and trying to figure out how a specific tool works instead of how SQL works. You’re better off learning how SQL works instead of learning a specific query builder’s toolset. That knowledge is transferrable. SQL itself is also incredibly powerful, used everywhere, and likely won’t go away anytime soon. Even if you learn new backends or frontends, you’ll still be using SQL. A lot of these benefits are lost when you only work with query builders and ORMs. Also, it can start to get frustrating sometimes when you realize that you know how to do something in SQL, that you don’t know how to do with an ORM. You’ll try to do things the “ORM” way, to use the tooling provided."]}),"\n",(0,s.jsxs)(i.p,{children:["Query builders and ORMs can offer things like sanitization, some type safety, and abstracting away dealing with conflicts with your primary indexes (sometimes), but these can be better handled with the tools I mention in part 3. Also, parameterized queries in ",(0,s.jsx)(i.a,{href:"https://github.com/brianc/node-postgres",children:"node-postgres"})," automatically sanitize your inputs — so the query builder doesn’t need to do that for you."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.em,{children:"Edit Dec 2020: Another thing ORMs/query builders are good for is being able to compose your queries — dynamic queries are easier to do since they are typically chained function calls."})}),"\n",(0,s.jsx)(i.h3,{id:t[1].id,children:t[1].value}),"\n",(0,s.jsxs)(i.p,{children:["I’d often have to spend time debugging issues with the ORM, that the underlying Node.js PostgreSQL driver (the wonderful ",(0,s.jsx)(i.a,{href:"https://github.com/brianc/node-postgres",children:"node-postgres"}),", which I’ll be calling “pg” from now on) didn’t actually have any issues with. Let me walk through a non-exhaustive list of problems I’ve had working with TypeORM. I’m picking on ORMs in general here, so this isn’t a bag on TypeORM."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["Trying to use it with one-off scripts, ",(0,s.jsx)(i.a,{href:"https://www.npmjs.com/package/ts-node",children:"ts-node"})," or ",(0,s.jsx)(i.a,{href:"https://www.npmjs.com/package/ts-node-dev",children:"ts-node-dev"})]})}),"\n",(0,s.jsxs)(i.p,{children:["I’ve had strange issues trying to use TypeORM with these tools — it’s been somewhat unpredictable. I know that for some of the scripts, I couldn’t get the files to run with ts-node, and required compiling it to JS. As soon as I removed TypeORM and used pg, it worked as expected. Handling database connections directly with ",(0,s.jsx)(i.a,{href:"https://node-postgres.com/api/pool/",children:"pg.Pool"})," and tools I mention in part 3 make this easy."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Working through the ORM, instead of utilizing the database\xa0directly"})}),"\n",(0,s.jsx)(i.p,{children:"The problem with tools like TypeORM is your entire database is managed through the ORM. It turns out that ORMs are actually not that powerful, at least not as powerful as SQL itself is. Managing your models in TypeORM leads to a lot of limitations. For example, something I often do in my database models is keep track of when a row was last updated. Doing this in TypeORM means that you do it at the JS layer, where TypeORM will get the current JS date and insert it. The problem with this is that it’s not happening at the source of truth — your database. If you try to do a query with TypeORM that doesn’t use one of its higher-level abstractions, you now have data inconsistency. You just changed some data but that column didn’t update. Instead, if you’re using Postgres, one option is to use Postgres’s triggers, so that if a row is modified at all, Postgres will do that work to figure out the rest."}),"\n",(0,s.jsx)(i.p,{children:"Another major limitation is not being able to define models outside of code written in TypeScript. We had several tables in our database that I wrote into SQL but TypeORM had no awareness of (we stopped using TypeORM for migrations first, before removing the rest of it). I could’ve made model files for all of those tables so that TypeORM would be aware of them, but it wasn’t worth it. On top of this, TypeORM allows you to make junction tables when you define a many-to-many relationship for some of your information, but these can’t be queried directly without using the query builder or dropping down to plain SQL (losing all type safety)."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Bulky, inefficient queries"})}),"\n",(0,s.jsx)(i.p,{children:"If you use TypeORM, go try something right now. Open your ormconfig.js (or\xa0.ts,\xa0.json, whichever one you use) and go add “logging”: true. Watch the queries. You might be amazed by 1. how long they are 2. how many there are 3. how inefficient and ugly they are sometimes. For example, a query as simple as"}),"\n",(0,s.jsx)(i.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"",children:(0,s.jsxs)(i.code,{children:[(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"SELECT"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" COUNT"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(“userId”)"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"FROM"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" users_followers"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"where"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “userId”"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"’blah"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"uuid"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'"})]})]})}),"\n",(0,s.jsx)(i.p,{children:"is actually this in TypeORM"}),"\n",(0,s.jsx)(i.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"",children:(0,s.jsxs)(i.code,{children:[(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"SELECT"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “Users_followers_rc”.”userId” "}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"AS"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “parentId”, "}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"COUNT"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(“users”.”id”) "}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"AS"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “cnt”"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"FROM"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “users” “users”"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"INNER JOIN"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “users_followers” “Users_followers_rc”"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"ON"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “Users_followers_rc”.”userId”"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"IN"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (‘blah"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"uuid’)"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"AND"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “Users_followers_rc”.”followerId” "}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “users”.”id”"})]}),"\n",(0,s.jsxs)(i.span,{children:[(0,s.jsx)(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"GROUP BY"}),(0,s.jsx)(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" “Users_followers_rc”.”userId”"})]})]})}),"\n",(0,s.jsx)(i.p,{children:"We’re often told that the ORM “takes care of the DB so you don’t have to do think about it”, but as I’ve done more development, I’ve learned that this is not the right approach. Your database is often the source of truth — and is also probably one of the slowest things in your entire stack, as it deals with stuff that’s persistent on disk, not memory like the rest of your stack probably does most of the time. Also, go check out what actually happens when you use save() in TypeORM. It makes sense when you think about it, but it’s probably more queries than you thought."}),"\n",(0,s.jsx)(i.p,{children:"ORMs also often try to support many different SQL dialects or different environments. You may find that there are specific features of a DB, say, Postgres, that you want to use. Those constructs to write better queries might not be available to you if you use an ORM. You could argue that you should aim for portability, not to be tied to a DB — but we’ll cross that bridge if it ever matters."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Migrations? Meh.."})}),"\n",(0,s.jsxs)(i.p,{children:["Another huge problem with ORMs is that the migrations they generate aren’t the best. For example, TypeORM will generate indices of any kind with some random string of characters. I still haven’t figured out why this is necessary unless a different dialect of SQL justifies it (I only use Postgres). So you might see a query like CREATE INDEX IDX_2123asf67s6a3agab31a instead of the default convention that Postgres uses — which is easy to understand, and easy to work with. You can probably guess what it’s called without even looking at your database because the ",(0,s.jsx)(i.a,{href:"https://gist.github.com/popravich/d6816ef1653329fb1745",children:"convention"})," Postgres already uses is pretty straightforward."]}),"\n",(0,s.jsx)(i.p,{children:"Sometimes the migrations you’ll get are straight-up wrong, but that’s the nature of trying to automate stuff like this. Other times, it’ll add extra indices where it doesn’t need to, or you’ll stare at your migration and realize that the default stuff it uses or even the quality of the query is not that great. Your migrations will look a lot cleaner written by hand. When you let your ORM handle migrations for you, it can’t be smart enough often to deal with things like altering columns. TypeORM will often drop your column and make a new one — that’s not a real solution in a lot of cases, unfortunately. If you write your migration by hand, these are easily solvable problems."}),"\n",(0,s.jsx)(i.p,{children:"Your migrations may also run more slowly if you need TypeScript to be compiled first. If you need to write any migrations by hand, you may notice that when you need to auto-generate migrations again, it might change or mess with the stuff you already modified (as expected, but that’s not what you would like in the ideal world). Also, does anyone actually do down migrations? More on this below in my preferred tools for doing migrations."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"The defaults are not that\xa0good"})}),"\n",(0,s.jsx)(i.p,{children:"I noticed some of the default types TypeORM recommends from the JS layer are not likely what you want in Postgres. Don’t get me wrong — this is remedied by passing in parameters in the model decorators, but if you’re relying on TypeORM to take care of it for you, these are things you won’t know about. For example, by default, TypeORM will generate a timestamp without a time zone if you use a date column. It basically makes no sense to ever do this. Use timestamptz. Also, character varying without a parameter is the same as the TEXT type in Postgres (specifically in Postgres, YMMV with other SQL dialects). Fewer characters to type for you, same underlying representation."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Doesn’t feel like working with SQL (by\xa0design?)"})}),"\n",(0,s.jsx)(i.p,{children:"ORMs are designed to make you feel like the database is abstracted to work with your language of choice. Instead of feeling like you’re working with something where people actually understand SQL and databases and are trying to make that easier for you. It often doesn’t feel like that."}),"\n",(0,s.jsx)(i.p,{children:"SQL is such a declarative language and reads like English that it’s often nicer to use it directly."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"No type safety once you drop away from the high-level abstractions"})}),"\n",(0,s.jsx)(i.p,{children:"One general problem with ORMs is that the type safety only exists as long as you’re working through their abstractions. Once you need to drop to SQL, you lose type safety entirely. How could we make this at least somewhat better? More on this in part 3."}),"\n",(0,s.jsx)(i.p,{children:"If I had to design an ORM from scratch, it would probably have a lot of these same problems. It’s probably better to not work with this abstraction in the first place if possible with your tooling of choice."}),"\n",(0,s.jsx)(i.h3,{id:t[2].id,children:t[2].value}),"\n",(0,s.jsx)(i.p,{children:"Now that you’ve read my mini-rant, let me share what my preferred tooling is today for completely moving off ORMs and query builders, as well as what the benefits are! Can we really have our cake and eat it too?"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Replacing migrations"})}),"\n",(0,s.jsxs)(i.p,{children:["Let’s start with migrations first! This one is easy. I use ",(0,s.jsx)(i.a,{href:"https://github.com/graphile/migrate",children:"https://github.com/graphile/migrate"})," (thanks ",(0,s.jsx)(i.a,{href:"https://medium.com/u/486409fe9425",children:"John Haley"})," for the recommendation!)"]}),"\n",(0,s.jsx)(i.p,{children:"It’s super straightforward to use — you write your SQL files, and run a command. You can even run a watch command that will watch your file and execute the migrations as you work on it (I’ve never used this, personally). It’s also super fast — because it’s plain SQL. No JavaScript to deal with anywhere. The tool itself is built in TypeScript and uses pg under the hood. It’s fast."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Replacing the rest of the\xa0ORM"})}),"\n",(0,s.jsxs)(i.p,{children:["A big inspiration for me writing this piece was a ",(0,s.jsx)(i.a,{href:"https://github.com/jawj/mostly-ormless",children:"project"})," I came across on GitHub a while ago. I initially didn’t want to go through it to implement it myself, but the wonderful author has made it an actual library. The package is called ",(0,s.jsx)(i.a,{href:"https://jawj.github.io/zapatos/",children:"Zapatos"}),". With this, you can automatically generate TypeScript types from your database (originally inspired from a package called ",(0,s.jsx)(i.a,{href:"https://github.com/sweetiq/schemats#readme",children:"Schemats"})," which is now unmaintained), do somewhat type-checked SQL queries, and get nifty helpers along the way, up to the level of abstraction you’d like without going overboard. Remember how I was talking about needing to keep the DB in sync with the backend? I don’t need to do that anymore. Honestly, some of the helpers here are better than what ORMs I’ve seen offer — at least for the queries that I’d use the ORM for. I would highly recommend reading the documentation (it’s straightforward to understand) and taking a look at it yourself — I won’t do it justice."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"I see the questions already… But Ani, isn’t this just like another ORM?"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"If you use it, you’ll see that it’s not. It ultimately uses pg and has some nifty helpers to help you do better type-checking, and make certain queries easier. It does not try to write strangely complex queries, manage connection pooling, or do anything super fancy (although generating the types from your database for you is amazing and fancy in and of itself). It’ll convert whatever you pass it to pretty much the exact query you would write if you wrote it by hand (most of the time, with the exception of the highest abstractions near the bottom of the docs). It stays pretty lean in terms of what it offers and what it can do for you — most of it is ultimately on you to write a proper query. The files it generates are put directly into your project’s source code, so you can see exactly what it does."}),"\n",(0,s.jsx)(i.h3,{id:t[3].id,children:t[3].value}),"\n",(0,s.jsxs)(i.p,{children:["Gotten this far? I thought I’d give a shoutout to some of the tools that have come in recent years to help build backends faster. Tools like ",(0,s.jsx)(i.a,{href:"https://www.graphile.org/postgraphile/",children:"PostGraphile"})," generate a performant GraphQL API on top of your database. They invert the model and turn your development model into database driven design. It’ll teach you a lot about how to use your database’s powerful features instead of using it like a dummy data store you abstract away through code."]}),"\n",(0,s.jsx)(i.p,{children:"Thanks for reading! Please let me know if you have any feedback in the comments below. I haven’t been writing that much about programming-related topics so I thought I’d kick it off with a light intro to something I did recently."})]})},"/posts/move-off-orms-in-typescript",{filePath:"pages/posts/move-off-orms-in-typescript.md",timestamp:1729111107e3,pageMap:o.v,frontMatter:{title:"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:"2020-06-12",tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"},title:"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript"},"undefined"==typeof RemoteContent?r:RemoteContent.useTOC)},9075:function(e,t,i){"use strict";i.d(t,{v:function(){return s}});let s=[{name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{name:"posts",route:"/posts",children:[{name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The Short-Lived Journey of Our First Product",author:"Ani Ravi",date:new Date(15821568e5),tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:new Date(15971904e5),tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:new Date(159192e7),tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software Engineering in the Early Days of a Product",author:"Ani Ravi",date:new Date(16560288e5),tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell if you can already program in another language?",author:"Ani Ravi",date:new Date(16162848e5),tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{name:"stand-out-engineering-team",route:"/posts/stand-out-engineering-team",frontMatter:{title:"How to make an engineering team stand out",author:"Ani Ravi",date:new Date(17290368e5),tag:"Company, Startup, Engineering",description:"What many engineering teams seem to be miss"}},{name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The Incredible Irony of Dynamically-Typed Languages",author:"Ani Ravi",date:new Date(16206912e5),tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your Toy Project is Not Ready For Production",author:"Ani Ravi",date:new Date(15865632e5),tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding Users is Actually Difficult",author:"Ani Ravi",date:new Date(16470432e5),tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some Reflections on using Elixir in Production at a Small Startup",author:"Ani Ravi",date:new Date(16469568e5),tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I Bought a Framework Laptop",author:"Ani Ravi",date:new Date(16374528e5),tag:"Passion",description:"A company that deserves to exist."}},{name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working On Things That Are Fun, But Don’t Matter",author:"Ani Ravi",date:new Date(15964992e5),tag:"Work, Passion",description:"Not everything is worth working on."}},{name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your Database is All You Are",author:"Ani Ravi",date:new Date(16162848e5),tag:"PostgreSQL, Databases",description:"Get serious about your data"}}]},{name:"tags",route:"/tags",children:[]}]}},function(e){e.O(0,[821,888,774,179],function(){return e(e.s=3226)}),_N_E=e.O()}]);