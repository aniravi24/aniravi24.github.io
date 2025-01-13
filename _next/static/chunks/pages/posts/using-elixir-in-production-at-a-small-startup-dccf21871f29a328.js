(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{5960:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/using-elixir-in-production-at-a-small-startup",function(){return a(9884)}])},9884:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l,useTOC:()=>s});var o=a(5105),i=a(1686),r=a(6453),n=a(2518);function s(e){return[]}let l=(0,i.e)(function(e){let t={a:"a",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"If you’ve read my previous blog posts, you know that I’m generally biased toward languages that have strong static analysis tools, so less stuff gets put in production that isn’t verified by a compiler. However, it’s almost inevitable in your programming journey nowadays that you will work in some language with almost no static analysis tooling, at least at most young companies. As much as I love tools that can make programming more sane, it’s also the case that programming tools still have a lot of room for improvement, to help aid programmers rather than needing to spend too much time type-wrangling or dealing with unclear errors. I’ve been using Elixir for some time now, and used to have a more negative opinion of it starting out, primarily because dealing with constant runtime errors was super annoying (still is) and it felt slow to build new features when having to keep all the information in my head. While there are some shortcomings in terms of things I like having in a language, some of Elixir’s tools are great."}),"\n",(0,o.jsxs)(t.p,{children:["Most people often talk about how networking tooling in Elixir is awesome, since communicating between processes and external servers is basically “built-in”, so network clustering in Elixir (especially for building things like chat apps) is much simpler than in other languages. However, I think Elixir’s “killer app” is ",(0,o.jsx)(t.a,{href:"https://github.com/elixir-ecto/ecto",children:"Ecto"}),", Elixir’s database access library, primarily used with PostgreSQL. Ecto is pretty powerful, relies heavily on macros, and makes composing SQL (especially dynamic queries where you chain query fragments together in different situations) really easy. We make use of these aspects of Ecto heavily in production. As much as I love statically-typed languages, I don’t know how to make SQL as fluid, maintainable, and as easy-to-use as Ecto does in Elixir. It’s actually one of the biggest reasons why we haven’t seriously looked at any other backend languages for our Elixir codebase - Ecto is just that much easier to use and makes writing new features that much faster (if anyone knows how I can get composable queries, reusable query fragments, helpers to write things like joins, and raw SQL-level performance from a language like Haskell or Rust, please let me know)!"]}),"\n",(0,o.jsxs)(t.p,{children:["Ecto combined with ",(0,o.jsx)(t.a,{href:"https://github.com/absinthe-graphql/absinthe",children:"Absinthe"})," (Elixir’s premier GraphQL server library) is a really good combination to get you started - it reduces the amount of code you have to write significantly for doing data access and the performance is good enough. Ecto schemas maintain the associations between different tables, and Absinthe + Ecto can figure out how to query a good amount of data simply by using dataloader and not having to handwrite a lot of joins or other queries. Many of Elixir’s most popular libraries make use of macros and DSLs to express ideas in non-standard Elixir syntax (like the two aforementioned libraries), and while it may make things a little harder to understand at the beginning of your journey with Elixir, every engineer I’ve worked with figures it out quickly."]}),"\n",(0,o.jsxs)(t.p,{children:["Elixir is still growing but still a fairly young ecosystem, and so there’s ever more ",(0,o.jsx)(t.a,{href:"https://github.com/h4cc/awesome-elixir",children:"tools/libraries"})," being developed. It has just enough of the tracing, logging, API, security, DB, and websocket tooling that you need to build a serious app in production. It also has some insane features like being able to directly call or run your production code, and hot code reloading modules in your production process."]}),"\n",(0,o.jsx)(t.p,{children:"Every set of tools comes with tradeoffs, and different tradeoffs will affect you in different ways at different stages of your product. It’s worthwhile to have periods of reflection to re-evaluate whether you’re using the best tools available to you to solve the problems ahead, and thinking through how much effort it would take to change tools if needed. Elixir is mostly a simple language to learn, and can get you started fairly quickly if that’s what you’re looking for. It’s also a decent gateway into some functional programming ideas, but if you’re looking for tooling that dives headfirst into FP ideas, I would look at other languages instead. I’m not sure when or if Elixir’s usage will dwindle for our product in favor of other tools, but for now, it’s taken us quite far!"})]})},"/posts/using-elixir-in-production-at-a-small-startup",{filePath:"pages/posts/using-elixir-in-production-at-a-small-startup.md",timestamp:1736730875e3,pageMap:r.O,frontMatter:{title:"Some reflections on using elixir in production at a small startup",author:"Ani Ravi",date:"2022-03-11",tag:"Elixir, Programming Languages",description:"Using Elixir in production"},title:"Some reflections on using elixir in production at a small startup"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},6453:(e,t,a)=>{"use strict";a.d(t,{O:()=>o});let o=[{name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{name:"posts",route:"/posts",children:[{name:"an-underrated-part-of-using-graphql",route:"/posts/an-underrated-part-of-using-graphql",frontMatter:{title:"An underrated part of using GraphQL",author:"Ani Ravi",date:new Date(16760736e5),tag:"Programming, GraphQL, Libraries",description:"Consistent naming."}},{name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The short-lived journey of our first product",author:"Ani Ravi",date:new Date(15821568e5),tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:new Date(15971904e5),tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{name:"long-term-vs-short-term-career-choices",route:"/posts/long-term-vs-short-term-career-choices",frontMatter:{title:"Long-term vs short-term career choices",author:"Ani Ravi",date:new Date(17278272e5),tag:"Career, Life",description:"One potential path to long-term success"}},{name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating away from query builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:new Date(159192e7),tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software engineering in the early days of a product",author:"Ani Ravi",date:new Date(16560288e5),tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell?",author:"Ani Ravi",date:new Date(16162848e5),tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{name:"stand-out-engineering-team",route:"/posts/stand-out-engineering-team",frontMatter:{title:"How to make an engineering team stand out",author:"Ani Ravi",date:new Date(17290368e5),tag:"Company, Startup, Engineering",description:"What many engineering teams seem to miss"}},{name:"starting-a-company",route:"/posts/starting-a-company",frontMatter:{title:"Musings on starting a company",author:"Ani Ravi",date:new Date(17278272e5),tag:"Company, Startup",description:"When to start a company"}},{name:"the-future-of-typescript",route:"/posts/the-future-of-typescript",frontMatter:{title:"The future of TypeScript",author:"Ani Ravi",date:new Date(16760736e5),tag:"TypeScript, Programming, Effect, Functional, Libraries",description:"This set of libraries will revolutionize how we write TypeScript."}},{name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The incredible irony of dynamically-typed languages",author:"Ani Ravi",date:new Date(16206912e5),tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your toy project is not ready for production",author:"Ani Ravi",date:new Date(15865632e5),tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding users is actually difficult",author:"Ani Ravi",date:new Date(16470432e5),tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some reflections on using elixir in production at a small startup",author:"Ani Ravi",date:new Date(16469568e5),tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I bought a Framework laptop",author:"Ani Ravi",date:new Date(16374528e5),tag:"Passion",description:"A company that deserves to exist."}},{name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working on things that are fun, but don’t matter",author:"Ani Ravi",date:new Date(15964992e5),tag:"Work, Passion",description:"Not everything is worth working on."}},{name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your database is all you are",author:"Ani Ravi",date:new Date(16162848e5),tag:"PostgreSQL, Databases",description:"Get serious about your data"}}]},{name:"tags",route:"/tags",children:[]}]}},e=>{var t=t=>e(e.s=t);e.O(0,[686,636,593,792],()=>t(5960)),_N_E=e.O()}]);