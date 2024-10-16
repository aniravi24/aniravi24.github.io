(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{9612:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/learning-graphql-through-postgraphile",function(){return a(7556)}])},7556:function(t,e,a){"use strict";a.r(e),a.d(e,{useTOC:function(){return s}});var o=a(2676),r=a(2821),i=a(9075),n=a(1426);function s(t){return[]}e.default=(0,r.c)(function(t){let e={a:"a",em:"em",p:"p",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"This post will not walk through how to do anything in particular — it’s not a tutorial. It goes through what I learned and points to tools and documentation I used to get started — which might be a good starting point for others."})}),"\n",(0,o.jsxs)(e.p,{children:["I recently wanted to take a jump into learning GraphQL, so I sped through ",(0,o.jsx)(e.a,{href:"https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS141x+3T2019/course/",children:"this"})," course (way shorter than it looks). For some reason, I had this mental barrier thinking GraphQL was more complicated than REST, but the fundamentals are actually quite simple. The way this course framed GraphQL made it easy to understand."]}),"\n",(0,o.jsxs)(e.p,{children:["I knew some friends that had used and spoke highly of ",(0,o.jsx)(e.a,{href:"https://www.graphile.org/postgraphile/introduction/",children:"PostGraphile"}),", a tool written in TypeScript that reads your PostgreSQL database schema and generates a GraphQL API on top of it. I went through all of the documentation and ended up learning a lot more about database design in the process. In effect, by learning PostGraphile and actually trying to build an initial project with it, I learned about GraphQL and more about Postgres. It was awesome to double dip and become more familiar with some of the many powerful features Postgres has."]}),"\n",(0,o.jsxs)(e.p,{children:["PostGraphile forces you to think of the database as your application. Another way to do put it is that you’re doing database-driven-design. Now you might be wondering, how do you actually get work done (e.g. send emails)? One awesome tool the same folks have built is called ",(0,o.jsx)(e.a,{href:"https://github.com/graphile/worker",children:"worker"}),". This allows you to use your database as a job queue, that your javascript code can pull jobs from and do work. Additionally, if you check out the PostGraphile documentation, there are easy ways to extend your GraphQL schema so you can add your own queries and mutations, similar to how you might do it if you had to write your own schemas and resolvers. You can use ",(0,o.jsx)(e.a,{href:"https://github.com/graphile/migrate",children:"migrate"})," to write your SQL migrations. Migrate simply has you write SQL files and the migrations run quickly."]}),"\n",(0,o.jsx)(e.p,{children:"Something to note is that if you run primarily on PostGraphile, you will likely end up using Node.JS (or any compile-to-JS language, e.g. ReasonML) for anything related to PostGraphile or its workers due to the tools being written in TypeScript. Extending PostGraphile easily with plugins requires JS code in your codebase."}),"\n",(0,o.jsx)(e.p,{children:"I’m not sure if people would typically recommend learning GraphQL through a tool like this, but I found it great to get started. Anything that runs through PostGraphile’s autogenerated schema (not necessarily custom stuff you’ve written) also avoids N+1 query problems, as your GraphQL query is parsed into a SQL query prior to running against your database, keeping things performant. I saved a ton of time building with PostGraphile, and you get lots of interesting benefits doing things through DB-driven design. You could build say, a user-facing API and admin API largely just by setting database permissions per table, without having to write entire APIs or dealing with security for it separately. You can build a lot more a lot faster, especially as you aren’t spending time in your REST APIs thinking specifically about what query you need to write to get certain data. You spend a lot more time in the database, but less time overall."}),"\n",(0,o.jsx)(e.p,{children:"After giving PostGraphile a try, if you use Node.JS or are willing to have part of your project in it, I would highly recommend PostGraphile!"})]})},"/posts/learning-graphql-through-postgraphile",{filePath:"pages/posts/learning-graphql-through-postgraphile.md",timestamp:1729113424e3,pageMap:i.v,frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:"2020-08-12",tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"},title:"Learning GraphQL through PostGraphile"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},9075:function(t,e,a){"use strict";a.d(e,{v:function(){return o}});let o=[{name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{name:"posts",route:"/posts",children:[{name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The Short-Lived Journey of Our First Product",author:"Ani Ravi",date:new Date(15821568e5),tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:new Date(15971904e5),tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:new Date(159192e7),tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software Engineering in the Early Days of a Product",author:"Ani Ravi",date:new Date(16560288e5),tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell if you can already program in another language?",author:"Ani Ravi",date:new Date(16162848e5),tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{name:"stand-out-engineering-team",route:"/posts/stand-out-engineering-team",frontMatter:{title:"How to make an engineering team stand out",author:"Ani Ravi",date:new Date(17290368e5),tag:"Company, Startup, Engineering",description:"What many engineering teams seem to miss"}},{name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The Incredible Irony of Dynamically-Typed Languages",author:"Ani Ravi",date:new Date(16206912e5),tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your Toy Project is Not Ready For Production",author:"Ani Ravi",date:new Date(15865632e5),tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding Users is Actually Difficult",author:"Ani Ravi",date:new Date(16470432e5),tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some Reflections on using Elixir in Production at a Small Startup",author:"Ani Ravi",date:new Date(16469568e5),tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I Bought a Framework Laptop",author:"Ani Ravi",date:new Date(16374528e5),tag:"Passion",description:"A company that deserves to exist."}},{name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working On Things That Are Fun, But Don’t Matter",author:"Ani Ravi",date:new Date(15964992e5),tag:"Work, Passion",description:"Not everything is worth working on."}},{name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your Database is All You Are",author:"Ani Ravi",date:new Date(16162848e5),tag:"PostgreSQL, Databases",description:"Get serious about your data"}}]},{name:"tags",route:"/tags",children:[]}]}},function(t){t.O(0,[821,888,774,179],function(){return t(t.s=9612)}),_N_E=t.O()}]);