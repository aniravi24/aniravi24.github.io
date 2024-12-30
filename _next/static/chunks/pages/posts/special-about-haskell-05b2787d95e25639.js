(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{481:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/special-about-haskell",function(){return a(7861)}])},7861:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l,useTOC:()=>s});var o=a(5105),n=a(6900),i=a(4074),r=a(95);function s(e){return[]}let l=(0,n.e)(function(e){let t={a:"a",em:"em",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"I started programming by learning Java. After taking a break from learning programming, I jumped into web development by learning JavaScript. Unsatisfied, I eventually moved to TypeScript. I’ve seen a little bit of what a few different languages have to offer and have dabbled in some others not mentioned here."}),"\n",(0,o.jsxs)(t.p,{children:["So what’s special about ",(0,o.jsx)(t.a,{href:"https://www.haskell.org/",children:"Haskell"}),"?"]}),"\n",(0,o.jsxs)(t.p,{children:["I didn’t know anything about functional programming until about a year and a half ago — I had no idea that the things I liked most about programming actually came from functional programming. I was later introduced to ",(0,o.jsx)(t.a,{href:"https://reasonml.github.io/",children:"ReasonML"})," and eventually found Haskell."]}),"\n",(0,o.jsx)(t.p,{children:"Haskell seemed like a mysterious beast at first. I didn’t understand the syntax at all, and it looked different from any other language I had used. It seemed hard to read. Looking back, the things I found so confusing make so much sense, and I only found it so hard to read even basic code simply because I was unfamiliar, not because there was anything inherently difficult to understand."}),"\n",(0,o.jsx)(t.p,{children:"One effect of learning Haskell is that it completely changes the way you think about writing programs, coming from a background like mine. This also means that there will be a greater learning curve, and it’s unlikely you’ll make the leap unless you’re forced to or you’re interested in learning it in the first place. I have had a hard time convincing people as to why you should learn it, also due to the fact I am still a complete beginner."}),"\n",(0,o.jsx)(t.p,{children:"The most novel things that blew my mind coming from other languages were:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Way more sophisticated type inference. It repeatedly demonstrates to you that types are not just for error checking as is a common misconception and reductive view of the real power of type systems. Types are meant to be ",(0,o.jsx)(t.a,{href:"https://blog.poisson.chat/posts/2021-03-17-what-is-a-type.html",children:"composable specifications"})," to help you model your programs. Good types make refactoring fearless, as your application grows in size and you will be making changes often. The more of your domain that you can model in the type system, the more the compiler can help you make sure you’re doing what you told it you would. It’s a conversation between you and your compiler."]}),"\n",(0,o.jsx)(t.li,{children:"Ability for the type system to track things that are side effects vs pure functions. A pure function is a function that only does what it needs to do with its inputs and returns back the same output given the same input (like in math!). For example, an add function that adds two numbers will take two numbers and return the addition of those two numbers, nothing else. If it did a side effect, it might do something like try to log to the console or send an email before adding the two numbers. In Haskell, you cannot just send an email inside of a pure function without changing the type of the entire function to indicate a side effect will be performed. By isolating the pure from the impure, it’s easier for you, the programmer, to understand what your code is doing (or intending to do)."}),"\n",(0,o.jsx)(t.li,{children:"Concise code, and robust abstractions (aka tools for you, the programmer to use) built on mathematical foundations. Haskell gives you a new set of building blocks and primitives upon which to build your programs, many of which are not the same as the ones you may be very comfortable using in other languages, such as for loops. Haskell has its warts, but many of the ideas you’ll encounter even simply by starting to learn the language have been built with rigor and decades of research."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"What’s most important about number 3 is that any living codebase will increase in complexity, even if it doesn’t grow in size (aka lines of code). To be able to manage this well, you need the right tools."}),"\n",(0,o.jsx)(t.p,{children:"Something I find to be a big problem in programming is we’ve taught programmers to expect immediate results and immediate positive feedback from starting a new project."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"“You mean I can’t spin up a production project in 5 minutes??”"})}),"\n",(0,o.jsx)(t.p,{children:"Haskell is one of those things you learn because you are willing to pay the upfront cost to have an easier time managing complexity down the road. Just because something looks easy right now doesn’t mean it will be easy as your project grows. There is always a cost. Haskell pushes more of the costs upfront (making you reason about types, new things to learn) instead of giving you the easiest possible onboarding and leaving you to think that the tools are powerful enough to grow with you as your project grows. We have a job as programmers to use the best tools at our disposal to build the most reliable programs."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"If you are looking for a batteries-included dive into Haskell web development though, check out"})," ",(0,o.jsx)(t.a,{href:"https://ihp.digitallyinduced.com/",children:(0,o.jsx)(t.em,{children:"IHP"})}),(0,o.jsx)(t.em,{children:"!"})]}),"\n",(0,o.jsx)(t.p,{children:"Nothing I’ve mentioned thus far is what I’ve found most compelling about this language. So what’s special about it?"}),"\n",(0,o.jsxs)(t.p,{children:["Haskell is the first language I’ve learned that makes you reason about ",(0,o.jsx)(t.em,{children:"what code means"}),", not ",(0,o.jsx)(t.em,{children:"what it does"}),". Whenever I learned how to code, I always wanted to do some set of actions to accomplish a particular goal. When I wanted to learn how to put stuff in a database, I learned the basics of whatever tool I needed to insert data into a database. When I needed to render something on the UI, I learned a frontend framework to make UIs."]}),"\n",(0,o.jsxs)(t.p,{children:["For the first time in my life, a language has made me interested in programming in itself — to reason about code at a higher-level and learn how to use the vast array of tools available in Haskell to express your constraints and domain. Things I would’ve never been interested in learning before learning Haskell (e.g. something like ",(0,o.jsx)(t.a,{href:"https://github.com/hmemcpy/milewski-ctfp-pdf",children:"category theory"}),") are now suddenly interesting because it underlies a rich history of ideas that you can use to write concise, robust, maintainable, understandable, and composable code. Composable meaning that you can build one lego block of your program at a time, and put them together nicely with the tools afforded to you by the language. The building blocks can look simple at first, just like they often can in math, but how you put them together makes all the difference."]}),"\n",(0,o.jsx)(t.p,{children:"I’m still a beginner at Haskell. I’ve barely touched the surface, and am just dipping my toes into writing some actual programs with it outside of my day job. I worry I will never be able to enjoy “regular” programming again, however, I feel like I’m already getting to that point. If you are interested at all in expanding your mind as a programmer, and being able to learn lots of good ideas to improve your programming skills overall, learn some Haskell. It turns out a lot of the cool things you learn in Haskell help you write better code in most languages you will use nowadays because you aren’t only learning a new language, but also learning new ways to think. Haskell is often at the edge of programming language research — the capabilities you see in Haskell are eventually picked up by more mainstream languages."})]})},"/posts/special-about-haskell",{filePath:"pages/posts/special-about-haskell.md",timestamp:173552455e4,pageMap:i.O,frontMatter:{title:"What’s special about Haskell?",author:"Ani Ravi",date:"2021-03-21",tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"},title:"What’s special about Haskell?"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},4074:(e,t,a)=>{"use strict";a.d(t,{O:()=>o});let o=[{name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{name:"posts",route:"/posts",children:[{name:"an-underrated-part-of-using-graphql",route:"/posts/an-underrated-part-of-using-graphql",frontMatter:{title:"An underrated part of using GraphQL",author:"Ani Ravi",date:new Date(16760736e5),tag:"Programming, GraphQL, Libraries",description:"Consistent naming."}},{name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The short-lived journey of our first product",author:"Ani Ravi",date:new Date(15821568e5),tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:new Date(15971904e5),tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{name:"long-term-vs-short-term-career-choices",route:"/posts/long-term-vs-short-term-career-choices",frontMatter:{title:"Long-term vs short-term career choices",author:"Ani Ravi",date:new Date(17278272e5),tag:"Career, Life",description:"One potential path to long-term success"}},{name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating away from query builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:new Date(159192e7),tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software engineering in the early days of a product",author:"Ani Ravi",date:new Date(16560288e5),tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell?",author:"Ani Ravi",date:new Date(16162848e5),tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{name:"stand-out-engineering-team",route:"/posts/stand-out-engineering-team",frontMatter:{title:"How to make an engineering team stand out",author:"Ani Ravi",date:new Date(17290368e5),tag:"Company, Startup, Engineering",description:"What many engineering teams seem to miss"}},{name:"starting-a-company",route:"/posts/starting-a-company",frontMatter:{title:"Musings on starting a company",author:"Ani Ravi",date:new Date(17278272e5),tag:"Company, Startup",description:"When to start a company"}},{name:"the-future-of-typescript",route:"/posts/the-future-of-typescript",frontMatter:{title:"The future of TypeScript",author:"Ani Ravi",date:new Date(16760736e5),tag:"TypeScript, Programming, Effect, Functional, Libraries",description:"This set of libraries will revolutionize how we write TypeScript."}},{name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The incredible irony of dynamically-typed languages",author:"Ani Ravi",date:new Date(16206912e5),tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your toy project is not ready for production",author:"Ani Ravi",date:new Date(15865632e5),tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding users is actually difficult",author:"Ani Ravi",date:new Date(16470432e5),tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some reflections on using elixir in production at a small startup",author:"Ani Ravi",date:new Date(16469568e5),tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I bought a Framework laptop",author:"Ani Ravi",date:new Date(16374528e5),tag:"Passion",description:"A company that deserves to exist."}},{name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working on things that are fun, but don’t matter",author:"Ani Ravi",date:new Date(15964992e5),tag:"Work, Passion",description:"Not everything is worth working on."}},{name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your database is all you are",author:"Ani Ravi",date:new Date(16162848e5),tag:"PostgreSQL, Databases",description:"Get serious about your data"}}]},{name:"tags",route:"/tags",children:[]}]}},e=>{var t=t=>e(e.s=t);e.O(0,[900,636,593,792],()=>t(481)),_N_E=e.O()}]);