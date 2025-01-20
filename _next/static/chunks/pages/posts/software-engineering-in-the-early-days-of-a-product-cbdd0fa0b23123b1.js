(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{193:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/software-engineering-in-the-early-days-of-a-product",function(){return o(8918)}])},8918:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l,useTOC:()=>s});var a=o(5105),n=o(492),i=o(9700),r=o(5111);function s(e){return[{value:"Tools",id:"tools",depth:2},{value:"Team",id:"team",depth:2},{value:"Abstractions",id:"abstractions",depth:2},{value:"Debt",id:"debt",depth:2},{value:"Deletion",id:"deletion",depth:2},{value:"Final Thoughts",id:"final-thoughts",depth:2}]}let l=(0,n.e)(function(e){let{toc:t=s(e)}=e,o={a:"a",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"I’ve been writing code more seriously for a few years now, initially starting off with projects built from the ground up, and more recently, working at a company where I work with a pre-existing codebase. Pretty much all of my software engineering experience comes from early-stage companies doing web development, so I don’t have the experience to comment on what happens when projects scale to millions or billions of users or niche projects that may have extreme performance concerns, etc."}),"\n",(0,a.jsx)(o.p,{children:"Ultimately, your goal in the early days is to figure out if you can make something people want (in a timely manner). Over time, you want to be able to maintain or create better experiences if you have determined that you are, in fact, solving a real problem. The following contains some themes I think anyone looking to build something from the ground up should think about from a software engineering lens. Many of them are intertwined with each other so you can expect overlap between the themes."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"#tools",children:"1. The tools you pick, particularly in the early days, matter way more than people give it credit for."})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"#team",children:"2. The team you build will make or break your engineering capacity."})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"#abstractions",children:"3. High-quality abstractions are the lifeblood of your codebase."})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"#debt",children:"4. You are not always liable for the debt you create - but someone eventually will be."})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"#deletion",children:"5. Deleting code is a feature."})}),"\n",(0,a.jsx)(o.h2,{id:t[0].id,children:t[0].value}),"\n",(0,a.jsx)(o.p,{children:"I hear a lot of engineers say “programming languages are just tools”, as though tools don’t matter all that much and you can pick whatever you want to solve your problem. Not all tools are created equal. Different tools certainly come with different tradeoffs, and I’ve come to believe after observing at least a few startups now that engineers in the early days should take these tradeoffs more seriously (and consider them in the first place)."}),"\n",(0,a.jsx)(o.p,{children:"The tools you choose in the early days will have an outsized impact on everything you do:"}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsx)(o.li,{children:"The team you are able to hire"}),"\n",(0,a.jsx)(o.li,{children:"The velocity with which you ship"}),"\n",(0,a.jsx)(o.li,{children:"The quality/experience of your product"}),"\n",(0,a.jsx)(o.li,{children:"The quality/maintainability of your code"}),"\n",(0,a.jsx)(o.li,{children:"Scaling all of the above as the team grows"}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"You can make the case that there’s actually no choice more important than the tools you choose in the early days - they will stick around longer than you think, potentially even longer than the early people you hire. Someone will pay the price for choosing or working with improper tools - the engineers, your users, or all of the above. On the other hand, great tools can give you incredible leverage - which is what good technology is supposed to do for humans in the first place right?"}),"\n",(0,a.jsx)(o.p,{children:"The more of your team’s standards you can enforce with tools, the better. For example, aim to have styling practices and code patterns enforced more by tools, so people don’t have to think about it and can’t easily make an excuse to avoid it. If you can do this early, it’s nice to have because it’s a lot more work to fix when you have many lines of code."}),"\n",(0,a.jsxs)(o.p,{children:["Choose high-quality tools that allow you to work with more than one engineer. For example, choose a statically-typed language ",(0,a.jsx)(o.sup,{children:(0,a.jsx)(o.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":"","aria-describedby":"footnote-label",children:"1"})}),". You can move faster when the computer does so much of the work for you, and as a startup’s product continues changing, you have an aid that can help you make changes with much less brainpower on the code itself. Shift your focus to actually building something your users want, and spend less time fighting with code. When your codebase is more than 10 lines and has multiple people working on it, you cannot sanely keep everything the code is doing in your head. Use a computer for what it’s good at. More time can be spent writing tests to test actual workflows (i.e. the stuff that can’t usually be checked by a type system)."]}),"\n",(0,a.jsx)(o.p,{children:"Don’t skimp on using tools such as a production-ready, battle-tested database like PostgreSQL. Eventually the remainder of your non-technical team will look to understanding your data. If you don’t take data modeling and storage seriously, it will be painful not only for the engineers, but for the entire business."}),"\n",(0,a.jsxs)(o.p,{children:["Improper tool choices can cause a real burden on your team, and potentially leave your team with things that are difficult to change years later. Especially if you choose to build with a stack of tools (programming languages, etc.) that turn out to not be maintainable even with your existing team not having grown at all. It’s ",(0,a.jsx)(o.em,{children:"possible"})," to make it by with improper tooling, but remember to ask yourself: should you?"]}),"\n",(0,a.jsx)(o.p,{children:"The tools you pick always have tradeoffs you have to weigh, and there are no silver bullets in software engineering. Just be more thoughtful about what tradeoffs matter to you. If you weigh your tradeoffs well, your team will be able to maintain decent velocity over longer periods of time, hire less, and ship higher quality code. If you choose poor tools, the burden on your team will increase drastically as the amount of code/complexity increases, your product quality will suffer (i.e. more bugs/errors), and your team will struggle working with your codebase over time."}),"\n",(0,a.jsx)(o.p,{children:"Ultimately you want your tools to help get you closer to delivering a high-quality experience for anyone using what you are building, and reduce your burden to deliver that experience."}),"\n",(0,a.jsx)(o.h2,{id:t[1].id,children:t[1].value}),"\n",(0,a.jsx)(o.p,{children:"Neck and neck with your tools is the team that you build. Your team will inform the tools you are able to work with - a more experienced team that’s also passionate about their craft can probably use tools that other startups couldn’t use, giving them an edge over the competition. When you’re building a technology company, it should be easy to reason about why having a technological advantage can be a good thing. But not every team can make use of certain technological advantages, cause it may be too out of reach for your team."}),"\n",(0,a.jsx)(o.p,{children:"You want a team willing to learn new things, even if it takes effort. When you have a team that’s not passionate about their craft especially in the early days of a startup, it will show. The last thing you want is an idea that was really poorly executed by engineers in such a way that users don’t even want to use your product. Granted, it’s important to understand engineering is a huge iceberg - there’s a ton of work that goes on behind the scenes to make things work at all."}),"\n",(0,a.jsx)(o.h2,{id:t[2].id,children:t[2].value}),"\n",(0,a.jsx)(o.p,{children:"Writing high-quality code from the outset has a fair bit of inertia, which is why it’s easy for engineers to ignore it and hack together whatever works. There’s a balance here - maybe a specific feature hacks something together to make it work, but the fundamental pieces of your codebase that are copy/pasted everywhere should be written with intention and real effort. While it’s more work to write “primitives” (e.g. helper functions, wrapper around libraries you use, design patterns in your codebase, UI components etc.), it increases development velocity a lot when your primitives are good. It makes maintenance easier, and your applications will “just work” for longer with less effort from you. Solve only the actual problems you have in your codebase today, and as your needs evolve, your code can be changed (with a good type system helping you easily refactor)!"}),"\n",(0,a.jsx)(o.p,{children:"Your ability to choose/build high-quality abstractions will evolve as you improve your craft, and more of your software touches the real world. Your abstractions will also improve over time - they will likely not be stagnant as your codebase and product needs evolve."}),"\n",(0,a.jsxs)(o.p,{children:["One example of a paradigm that I value in codebases is functional programming. As I’ve spent more time writing code, I’ve realized functional programming allows for cleaner and more maintainable abstractions, and a lot of the ideas in functional programming have permeated into most mainstream languages/frameworks. On a small team that’s ambitious and might have a large product to build, making it easier to reason about code while having less bugs/errors/crashes is generally a good thing ",(0,a.jsx)(o.sup,{children:(0,a.jsx)(o.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":"","aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,a.jsx)(o.p,{children:"If it takes you an extra week or two to build high-quality components for your team to work with, or reusable abstractions to build a high-quality API, do it. And if you’re willing to learn, explore other patterns for writing and organizing code."}),"\n",(0,a.jsx)(o.p,{children:"You may be surprised how the things you introduce will infect your codebase and be everywhere before you know it, so try to at least be intentional about this. Being able to write code that can be read and made sense of (with high-quality types, function names, components, etc.) takes more effort, but it allows you to maintain velocity over time while not degrading in quality and introducing lots of regressions. I generally find that writing stuff with functional programming principles in mind means that it may take more brainpower and effort to write it the first time, but it becomes much easier to maintain and reason about longer-term."}),"\n",(0,a.jsx)(o.h2,{id:t[3].id,children:t[3].value}),"\n",(0,a.jsx)(o.p,{children:"There’s primarily three types of technical debt in the early days:"}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsx)(o.li,{children:"The “debt” that’s incurred because you’ve learned or found a new tool/library/language that’s better for solving your problem than what you currently do."}),"\n",(0,a.jsx)(o.li,{children:"The debt that’s incurred from knowing you wrote code in an ugly/hacky way the first time to move faster, but at the cost of requiring cleanup or needing to be completely redone long term."}),"\n",(0,a.jsx)(o.li,{children:"The debt that’s incurred from the system not being designed in the optimal way to continue producing based on your users and company’s needs, which you may only find out later."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Paying down technical debt becomes more difficult over time for a myriad of reasons. It’s harder to justify spending time on especially at a small company that’s just trying to survive, and even harder to justify if the rest of your team doesn’t have hands-on experience building a product. However, it is necessary, and your team should be willing to take strides toward paying some of this down over time. If you don’t, it slows down the entire product development lifecycle and everything you ship will degrade in quality over time. It’s like a house - it needs to be maintained over time, and sometimes renovated entirely."}),"\n",(0,a.jsx)(o.p,{children:"Most engineers also don’t think as much as they should about how their debt creation doesn’t only affect themselves in the current moment - it affects your future self, and the rest of your team too. Every amount of debt you add is a collective debt that the entire team has to deal with, even if you end up leaving the team. Be thoughtful about increasing the burden on your team. Little or no thought into this can lead to large swaths of your codebase needing to be rewritten or worked on by you, or someone else on your team that joins later. If you can avoid it, there’s no need to put that burden on someone else."}),"\n",(0,a.jsx)(o.h2,{id:t[4].id,children:t[4].value}),"\n",(0,a.jsx)(o.p,{children:"As a product grows, it builds up cruft. Technical debt increases, and unused features take up space in your product and the code. The best code is no code. If building higher quality abstractions allows you to delete code, that is a great thing. If you can simplify your product and delete stuff, that is also a great thing. More code generally means more maintenance burden. Deleting code is definitely a feature. If you can find ways to delete code with little effort, be happy to do it. Even if it means something you spent hours, days, or weeks building should just be removed completely. Lines of code is a vanity metric. More code is not necessarily better (for the record, it’s also not always a bad thing)."}),"\n",(0,a.jsx)(o.h2,{id:t[5].id,children:t[5].value}),"\n",(0,a.jsx)(o.p,{children:"When I first started building products, I used to get excited whenever people said they “hacked” something together. I thought it was a badge of honor to just get something working. I don’t hold that belief anymore. While there is a time and place for hacking things together (especially when you’re early and your only concern is building a product people actually want and get your business to go from “default dead” to “default alive”), there are some things that most people overlook in the early days and certain decisions that can be made that continue to affect your team longer than you think. If you’re really building something people want and you’ve gotten the signals that you are, take what you’re building more seriously - if people depend on your product, you can’t only be focused on the 1000 foot view of the product - the manufacturing and assembly matter more than people give it credit for in the early days. Sometimes I feel as though people who build physical products probably understand this more intuitively than people who build software - cause when a physical product sucks, wow can you feel it. Everyone else at your company has different priorities - someone wants to get something solved for a customer, someone else wants to improve the business, etc. But you, the software engineer? Your job is to build a high-quality experience that people can use to solve their problem and to write code that other team members feel empowered working with to continuously deliver those high-quality experiences."}),"\n",(0,a.jsx)(o.hr,{}),"\n",(0,a.jsx)(o.p,{children:"If you are interested in functional programming, it’s up to you to decide how deep you want to encourage its patterns. You could use an esoteric language like Haskell if you’re more experienced and want to go all in, or use something like TypeScript that everyone knows and use the libraries/linting tools necessary to enforce a functional style, even if it’s not as ergonomic as in languages built from the ground up to be written in a functional style (Haskell, OCaml, F# etc.). You may decide you want to build your frontend UIs in React.js. A lot of React is heavily inspired by functional programming ideas."}),"\n",(0,a.jsxs)(o.section,{"data-footnotes":"",className:"footnotes",children:[(0,a.jsx)(o.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{id:"user-content-fn-1",children:["\n",(0,a.jsxs)(o.p,{children:["It makes no sense in 2022 to be shipping buggy and hard to maintain products with dynamically-typed languages. We built computers to help us, not to ignore all of their capabilities so we can do a worse job at something a computer is good at. A good statically-typed language will give you the expressive power you need with most of your problems, and for practical reasons, the escape hatches you may need when you don’t know how to make the types reconcile (until our tools get better). People often say that you can “move faster” with a dynamically-typed language - which if you’ve read any of my other posts, you know is a view that I vehemently disagree with. ",(0,a.jsx)(o.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{id:"user-content-fn-2",children:["\n",(0,a.jsxs)(o.p,{children:["The challenge with functional programming is it’s not the first paradigm people learn (most people learn imperative/object-oriented programming with Java, JavaScript, or Python), and it’s an entire system of programming that changes how you look at programming from almost the ground up. It’s a big mindset shift for someone who has already been programming for a while. The upfront cost is higher, and in a world of developer tools that are supposed to be “easy to get started”, it’s a harder pill to swallow that not everything “easy” is great for serious production usage. ",(0,a.jsx)(o.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),"\n"]}),"\n"]}),"\n"]})]})},"/posts/software-engineering-in-the-early-days-of-a-product",{filePath:"pages/posts/software-engineering-in-the-early-days-of-a-product.md",timestamp:1737339167e3,pageMap:i.O,frontMatter:{title:"Software engineering in the early days of a product",author:"Ani Ravi",date:"2022-06-24",tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."},title:"Software engineering in the early days of a product"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},9700:(e,t,o)=>{"use strict";o.d(t,{O:()=>a});let a=[{name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{name:"posts",route:"/posts",children:[{name:"an-underrated-part-of-using-graphql",route:"/posts/an-underrated-part-of-using-graphql",frontMatter:{title:"An underrated part of using GraphQL",author:"Ani Ravi",date:new Date(16760736e5),tag:"Programming, GraphQL, Libraries",description:"Consistent naming."}},{name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The short-lived journey of our first product",author:"Ani Ravi",date:new Date(15821568e5),tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:new Date(15971904e5),tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{name:"long-term-vs-short-term-career-choices",route:"/posts/long-term-vs-short-term-career-choices",frontMatter:{title:"Long-term vs short-term career choices",author:"Ani Ravi",date:new Date(17278272e5),tag:"Career, Life",description:"One potential path to long-term success"}},{name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating away from query builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:new Date(159192e7),tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software engineering in the early days of a product",author:"Ani Ravi",date:new Date(16560288e5),tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell?",author:"Ani Ravi",date:new Date(16162848e5),tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{name:"stand-out-engineering-team",route:"/posts/stand-out-engineering-team",frontMatter:{title:"How to make an engineering team stand out",author:"Ani Ravi",date:new Date(17290368e5),tag:"Company, Startup, Engineering",description:"What many engineering teams seem to miss"}},{name:"starting-a-company",route:"/posts/starting-a-company",frontMatter:{title:"Musings on starting a company",author:"Ani Ravi",date:new Date(17278272e5),tag:"Company, Startup",description:"When to start a company"}},{name:"the-future-of-typescript",route:"/posts/the-future-of-typescript",frontMatter:{title:"The future of TypeScript",author:"Ani Ravi",date:new Date(16760736e5),tag:"TypeScript, Programming, Effect, Functional, Libraries",description:"This set of libraries will revolutionize how we write TypeScript."}},{name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The incredible irony of dynamically-typed languages",author:"Ani Ravi",date:new Date(16206912e5),tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your toy project is not ready for production",author:"Ani Ravi",date:new Date(15865632e5),tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding users is actually difficult",author:"Ani Ravi",date:new Date(16470432e5),tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some reflections on using elixir in production at a small startup",author:"Ani Ravi",date:new Date(16469568e5),tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I bought a Framework laptop",author:"Ani Ravi",date:new Date(16374528e5),tag:"Passion",description:"A company that deserves to exist."}},{name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working on things that are fun, but don’t matter",author:"Ani Ravi",date:new Date(15964992e5),tag:"Work, Passion",description:"Not everything is worth working on."}},{name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your database is all you are",author:"Ani Ravi",date:new Date(16162848e5),tag:"PostgreSQL, Databases",description:"Get serious about your data"}}]},{name:"tags",route:"/tags",children:[]}]}},e=>{var t=t=>e(e.s=t);e.O(0,[492,636,593,792],()=>t(193)),_N_E=e.O()}]);