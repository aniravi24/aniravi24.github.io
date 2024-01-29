(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{6076:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/your-database-is-all-your-are",function(){return a(1298)}])},1298:function(t,e,a){"use strict";a.r(e),a.d(e,{__toc:function(){return u}});var o=a(1527),r=a(7415),i=a(4913),n=a(9717);a(9667);var s=a(2681);let u=[];function d(t){let e=Object.assign({p:"p",em:"em",a:"a"},(0,s.a)(),t.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"I’ve noticed a misguided approach in the broad web development ecosystem where programmers learn how to build real web applications while simultaneously ignoring the database almost entirely. While NoSQL databases have their uses, this is often how they are misconstrued when beginners learn web dev (I fell into this trap too, a few years ago). SQL databases are thought of as “too rigid”, or “too structured”, and you are told that you need some kind of tool that “hides away the complexity” so you don’t have to think about the database at all and just build your app."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"This is a horrendously bad idea."})}),"\n",(0,o.jsx)(e.p,{children:"Data is the lifeblood of your application. Everything you are as a project/company, everything you will be, is all encoded in that data you are storing, typically in your database or a third-party service you’re using. “Schemaless” databases for most new applications, especially ones where you only have one database and it is the primary one, is an outright mistake. If your data has no schema, why are you building anything in the first place? Data always has a schema — you only choose whether to make it implicit or explicit — when building most products, making it explicit makes a lot more sense. A lot of data tends to share some kind of relationship with other data. The best widespread tool we have to solve that problem is a relational database, like PostgreSQL."}),"\n",(0,o.jsxs)(e.p,{children:["Don’t ignore the data and think that you can come back to it later. Your project/company is nearly worthless without that data in the database. Know what the data is and explicitly define the structure so you can manage its complexity. If you don’t know what something is or can’t define it, you can’t reason about it in your code. It’s why you see most projects that use MongoDB use something like ",(0,o.jsx)(e.a,{href:"https://mongoosejs.com/",children:"Mongoose"}),". Cause guess what? It turns out that even if your database enforces close to nothing, you as the developer need to care about what data is being stored and the shape in which it is being stored. Mongoose attempts to put a lackluster SQL-like layer on top of a “schemaless” database. What happens if the structure of your data changes? Then, you have to write a migration. When you have a database that enforces constraints and structure, writing migrations are much easier because it’s harder to make mistakes. When you have no structure and no constraints, you can run migrations in production that are halfway broken without even realizing they are wrong, wondering why your application suddenly stopped working."]}),"\n",(0,o.jsx)(e.p,{children:"Data is a set of facts. You can’t fix bad data that was inserted wrong in the first place, because you don’t know what the proper data was supposed to be. Don’t get your facts wrong, and use a tool that gives you the power necessary to define your facts."})]})}let l={MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.a)(),t.components);return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)},pageOpts:{filePath:"pages/posts/your-database-is-all-your-are.md",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your Database is All You Are",author:"Ani Ravi",date:"2021-03-21T00:00:00.000Z",tag:"PostgreSQL, Databases",description:"Get serious about your data"},timestamp:1682230677e3,pageMap:[{kind:"MdxPage",name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"MdxPage",name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The Short-Lived Journey of Our First Product",author:"Ani Ravi",date:"2020-02-20T00:00:00.000Z",tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{kind:"MdxPage",name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{kind:"MdxPage",name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:"2020-08-12T00:00:00.000Z",tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{kind:"MdxPage",name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:"2020-06-12T00:00:00.000Z",tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{kind:"MdxPage",name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software Engineering in the Early Days of a Product",author:"Ani Ravi",date:"2022-06-24T00:00:00.000Z",tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{kind:"MdxPage",name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell if you can already program in another language?",author:"Ani Ravi",date:"2021-03-21T00:00:00.000Z",tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{kind:"MdxPage",name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The Incredible Irony of Dynamically-Typed Languages",author:"Ani Ravi",date:"2021-05-11T00:00:00.000Z",tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{kind:"MdxPage",name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your Toy Project is Not Ready For Production",author:"Ani Ravi",date:"2020-04-11T00:00:00.000Z",tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{kind:"MdxPage",name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding Users is Actually Difficult",author:"Ani Ravi",date:"2022-03-12T00:00:00.000Z",tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{kind:"MdxPage",name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some Reflections on using Elixir in Production at a Small Startup",author:"Ani Ravi",date:"2022-03-11T00:00:00.000Z",tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{kind:"MdxPage",name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I Bought a Framework Laptop",author:"Ani Ravi",date:"2021-11-21T00:00:00.000Z",tag:"Passion",description:"A company that deserves to exist."}},{kind:"MdxPage",name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working On Things That Are Fun, But Don’t Matter",author:"Ani Ravi",date:"2020-08-04T00:00:00.000Z",tag:"Work, Passion",description:"Not everything is worth working on."}},{kind:"MdxPage",name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your Database is All You Are",author:"Ani Ravi",date:"2021-03-21T00:00:00.000Z",tag:"PostgreSQL, Databases",description:"Get serious about your data"}},{kind:"Meta",data:{"software-engineering-in-the-early-days-of-a-product":"Software Engineering in the Early Days of a Product","understanding-users-is-actually-difficult":"Understanding Users is Actually Difficult","using-elixir-in-production-at-a-small-startup":"Some Reflections on using Elixir in Production at a Small Startup","why-i-bought-a-framework-laptop":"Why I Bought a Framework Laptop","the-incredible-irony-of-dynamically-typed-languages":"The Incredible Irony of Dynamically-Typed Languages","special-about-haskell":"What’s special about Haskell if you can already program in another language?","your-database-is-all-your-are":"Your Database is All You Are","learning-graphql-through-postgraphile":"Learning GraphQL through PostGraphile","working-on-things-that-are-fun-but-dont-matter":"Working On Things That Are Fun, But Don’t Matter","move-off-orms-in-typescript":"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript","toy-project-not-ready-for-production":"Your Toy Project is Not Ready For Production","first-product-journey":"The Short-Lived Journey of Our First Product",index:"Posts"}}]},{kind:"Meta",data:{index:"Home"}}],flexsearch:{codeblocks:!0},title:"Your Database is All You Are",headings:u},pageNextRoute:"/posts/your-database-is-all-your-are",nextraLayout:i.ZP,themeConfig:n.Z};e.default=(0,r.j)(l)},9717:function(t,e,a){"use strict";var o=a(1527);a(959);let r={comments:(0,o.jsx)(o.Fragment,{}),footer:(0,o.jsx)("div",{className:"my-4 border-t-2 mx-auto flex items-center sm:flex-row flex-col",children:(0,o.jsx)("p",{className:"text-sm text-gray-500",children:"Ani Ravi"})}),navs:[{url:"/feed.xml",name:"RSS"},{url:"https://github.com/aniravi24",name:"Github"}],darkMode:!0,dateFormatter:t=>new Date(t).toLocaleDateString("en-US",{day:"2-digit",year:"numeric",month:"short"})};e.Z=r}},function(t){t.O(0,[196,888,774,179],function(){return t(t.s=6076)}),_N_E=t.O()}]);