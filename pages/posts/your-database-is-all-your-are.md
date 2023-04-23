---
title: Your Database is All You Are
author: Ani Ravi
date: 2021-03-21
tag: PostgreSQL, Databases
description: Get serious about your data
---

I’ve noticed a misguided approach in the broad web development ecosystem where programmers learn how to build real web applications while simultaneously ignoring the database almost entirely. While NoSQL databases have their uses, this is often how they are misconstrued when beginners learn web dev (I fell into this trap too, a few years ago). SQL databases are thought of as “too rigid”, or “too structured”, and you are told that you need some kind of tool that “hides away the complexity” so you don’t have to think about the database at all and just build your app.

_This is a horrendously bad idea._

Data is the lifeblood of your application. Everything you are as a project/company, everything you will be, is all encoded in that data you are storing, typically in your database or a third-party service you’re using. “Schemaless” databases for most new applications, especially ones where you only have one database and it is the primary one, is an outright mistake. If your data has no schema, why are you building anything in the first place? Data always has a schema — you only choose whether to make it implicit or explicit — when building most products, making it explicit makes a lot more sense. A lot of data tends to share some kind of relationship with other data. The best widespread tool we have to solve that problem is a relational database, like PostgreSQL.

Don’t ignore the data and think that you can come back to it later. Your project/company is nearly worthless without that data in the database. Know what the data is and explicitly define the structure so you can manage its complexity. If you don’t know what something is or can’t define it, you can’t reason about it in your code. It’s why you see most projects that use MongoDB use something like [Mongoose](https://mongoosejs.com/). Cause guess what? It turns out that even if your database enforces close to nothing, you as the developer need to care about what data is being stored and the shape in which it is being stored. Mongoose attempts to put a lackluster SQL-like layer on top of a “schemaless” database. What happens if the structure of your data changes? Then, you have to write a migration. When you have a database that enforces constraints and structure, writing migrations are much easier because it’s harder to make mistakes. When you have no structure and no constraints, you can run migrations in production that are halfway broken without even realizing they are wrong, wondering why your application suddenly stopped working.

Data is a set of facts. You can’t fix bad data that was inserted wrong in the first place, because you don’t know what the proper data was supposed to be. Don’t get your facts wrong, and use a tool that gives you the power necessary to define your facts.
