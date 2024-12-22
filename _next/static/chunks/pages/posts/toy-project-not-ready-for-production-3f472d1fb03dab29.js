(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{5270:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/toy-project-not-ready-for-production",function(){return o(8080)}])},8080:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>u,useTOC:()=>s});var a=o(5105),r=o(6792),n=o(1923),i=o(1595);function s(e){return[]}let u=(0,r.e)(function(e){let t={a:"a",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["As I’ve been building products with ",(0,a.jsx)(t.a,{href:"https://medium.com/@ethannaluz",children:"Ethan Naluz"}),", one thing we re-learn time and time again is that making software robust in unpredictably different environments is tough. It’s easy to build a toy project and say that you learned how to use some new tool, library, or language quickly, but the real work in software engineering is in the last “10%”. It’s to make something run in a production environment, not just on your development machine. Have a view that sometimes renders correctly or has a strange breaking edge case that you notice? You can ignore that in a toy project, but it has to be taken care of for a proper experience in production. Your WebSockets don’t reconnect when the server restarts? You can handle this fine with a toy project — just restart the server. In production, stuff like this HAS to work."]}),"\n",(0,a.jsxs)(t.p,{children:["With the ",(0,a.jsx)(t.a,{href:"https://foodfeed.live/#/",children:"current idea"})," that we’re working on, we had a prototype in a few days and a more production-ready prototype within a few weeks. We realized that the way we built it had no chance at scaling one particular feature in the event that we got users (and would be painful to re-architect after getting users), so we had to go back to the drawing board for pieces of it. Prior to working on our current idea, we had worked on a robocall-blocking app called ",(0,a.jsx)(t.a,{href:"https://callpepper.co/#/",children:"Pepper"}),". We tested it again and again on our machines, getting the experience to what we thought was “good enough”. Guess what happened when we shipped? Issues across the board for users, largely due to things not under our control (on the bright side, people still really wanted it)."]}),"\n",(0,a.jsx)(t.p,{children:"Don’t even get me started on DevOps. Your toy project can run locally or on a tiny Heroku server and get through the day. Guess what, now you need to manage state across 5 servers, and can’t duplicate certain information. You have socket connections across 5 servers and need to manage how your connections hit the servers. Security? Whoops, turns out that your web service can be accessed publicly and has no way to stop people from connecting to it. Looks like people can easily flood you with requests too as long as they know what to send you. And on and on…"}),"\n",(0,a.jsx)(t.p,{children:"All of the things that don’t matter when your software is being used by 100 people will painfully crush you when it’s being used by 100,000 people. Of course, most of us building something from the ground up only dream of having 100,000+ users in the first place, so there’s a balance to not over-optimizing or trying to make everything perfect. The bar for having a decent experience with your software does seem to have gotten higher though, as we’ve gotten accustomed to good design and smooth experiences."}),"\n",(0,a.jsx)(t.p,{children:"I haven’t written that much about the technical lessons we’ve learned throughout our time building things, but I may start writing a bit more about that."})]})},"/posts/toy-project-not-ready-for-production",{filePath:"pages/posts/toy-project-not-ready-for-production.md",timestamp:1734896057e3,pageMap:n.O,frontMatter:{title:"Your toy project is not ready for production",author:"Ani Ravi",date:"2020-04-11",tag:"Toys, Project, Production, Development",description:"Tales of a developer."},title:"Your toy project is not ready for production"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},1923:(e,t,o)=>{"use strict";o.d(t,{O:()=>a});let a=[{name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{name:"posts",route:"/posts",children:[{name:"an-underrated-part-of-using-graphql",route:"/posts/an-underrated-part-of-using-graphql",frontMatter:{title:"An underrated part of using GraphQL",author:"Ani Ravi",date:new Date(16760736e5),tag:"Programming, GraphQL, Libraries",description:"Consistent naming."}},{name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The short-lived journey of our first product",author:"Ani Ravi",date:new Date(15821568e5),tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:new Date(15971904e5),tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{name:"long-term-vs-short-term-career-choices",route:"/posts/long-term-vs-short-term-career-choices",frontMatter:{title:"Long-term vs short-term career choices",author:"Ani Ravi",date:new Date(17278272e5),tag:"Career, Life",description:"One potential path to long-term success"}},{name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating away from query builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:new Date(159192e7),tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software engineering in the early days of a product",author:"Ani Ravi",date:new Date(16560288e5),tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell?",author:"Ani Ravi",date:new Date(16162848e5),tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{name:"stand-out-engineering-team",route:"/posts/stand-out-engineering-team",frontMatter:{title:"How to make an engineering team stand out",author:"Ani Ravi",date:new Date(17290368e5),tag:"Company, Startup, Engineering",description:"What many engineering teams seem to miss"}},{name:"starting-a-company",route:"/posts/starting-a-company",frontMatter:{title:"Musings on starting a company",author:"Ani Ravi",date:new Date(17278272e5),tag:"Company, Startup",description:"When to start a company"}},{name:"the-future-of-typescript",route:"/posts/the-future-of-typescript",frontMatter:{title:"The future of TypeScript",author:"Ani Ravi",date:new Date(16760736e5),tag:"TypeScript, Programming, Effect, Functional, Libraries",description:"This set of libraries will revolutionize how we write TypeScript."}},{name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The incredible irony of dynamically-typed languages",author:"Ani Ravi",date:new Date(16206912e5),tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your toy project is not ready for production",author:"Ani Ravi",date:new Date(15865632e5),tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding users is actually difficult",author:"Ani Ravi",date:new Date(16470432e5),tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some reflections on using elixir in production at a small startup",author:"Ani Ravi",date:new Date(16469568e5),tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I bought a Framework laptop",author:"Ani Ravi",date:new Date(16374528e5),tag:"Passion",description:"A company that deserves to exist."}},{name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working on things that are fun, but don’t matter",author:"Ani Ravi",date:new Date(15964992e5),tag:"Work, Passion",description:"Not everything is worth working on."}},{name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your database is all you are",author:"Ani Ravi",date:new Date(16162848e5),tag:"PostgreSQL, Databases",description:"Get serious about your data"}}]},{name:"tags",route:"/tags",children:[]}]}},e=>{var t=t=>e(e.s=t);e.O(0,[411,636,593,792],()=>t(5270)),_N_E=e.O()}]);