(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{9701:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/the-incredible-irony-of-dynamically-typed-languages",function(){return a(2098)}])},2098:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return l}});var o=a(1527),n=a(7415),r=a(4913),i=a(9717);a(9667);var s=a(2681);let l=[];function u(e){let t=Object.assign({p:"p"},(0,s.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"I come with an extremely strong bias, which is that computers should juggle meaningless minutia, freeing people up to work on more interesting, domain driven problems that actually provide value to the world. In computer programming, the best tool that we have to juggle this meaningless minutia is something called a \"type system\", and a very expressive type system like the ones provided in languages such as Haskell allow you to model your domain in code. With the help from tools, languages, and research that's been around for decades, we can get pretty far with our computer-aided tools. However, the incredible irony is that programmers, whose only job it is to build computers and programs that help us, don't want to use the tools that we have available to us, that make our jobs as programmers sane. Especially when working on teams with multiple people with serious production codebases that are more than 10 lines of code doing real work such as moving money, or handling your medical records."}),"\n",(0,o.jsx)(t.p,{children:'I find it astounding that entire programming languages and entire industries have been built on disregarding good ideas from the past, so programmers can ship bug after bug caused by "undefined is not a function" or "key foo not found in bar", or "I expected a Post here, but you gave me a User instead". Even worse is when the errors are non-trivial, and are deadly silent bugs that would\'ve easily been caught by a type system. Our goal as programmers should be to turn as many domain errors into type errors as possible, so the computer can catch our mistakes and we can go on with our lives. Whenever we need to make important changes to our codebase, we should be able to be focused on solving the actual domain specific problem at hand, instead of having to search through the entire codebase to figure out what data structures, functions, or other pieces were affected because of a particular change that was made. We have tools to help us do this, but we code like we\'re in the stone age.'}),"\n",(0,o.jsx)(t.p,{children:"I'll be frank. I find this type (no pun intended) of programming insane. Coming back to the point I mentioned earlier, isn't it amazing that programmers build things to automate so much minutia away but we don't want to give away control for our own jobs, to a set of tools that could make our jobs so much more interesting than having to spend hours upon hours asking meaningless questions about your code that a tool should answer for you? When a computer can help us write code, we find every excuse to not learn how to use it (e.g. it \"slows me down\") and use subpar tools that rely on exerting double or triple the mental effort and time, just to get more buggy code. That mental effort isn't going toward expanding your mind, learning new ideas, or finding better ways solve problems in your code or in the real world, it's \"where the heck am I using this argument inside this data structure I just changed\" or \"what is the value or shape of the data I'm passing in here\", AKA meaningless questions that programmers, who get paid so much money, should not be spending half their time thinking about (if you think half is an exaggeration, it's not off by much when compared to the reality)."}),"\n",(0,o.jsx)(t.p,{children:"Don't get me wrong, I want to get paid as much as the next person. However, it's astounding that we are as efficient as we are, given how much time we waste on nonsense that doesn't have to do with actually solving problems and/or developing more knowledge. Then again, the world is so inefficient that even our inefficiency looks super productive in comparison. That's the only explanation I think of for how we've gotten this far and how we get paid so much given so much code out there is just jungle science and written with very little rigor or attention, using world-class tools that people should be using but don't."}),"\n",(0,o.jsx)(t.p,{children:"There's light at the end of the tunnel though. Programmers are starting to realize that when they work in a team of more than one person, and their codebase becomes completely unmaintainable within a few years, that there must be a better way. And it turns out there is, not because people have new ideas on how to do things, but because ideas that existed for decades are finally being taken seriously by more than a small handful of passionate programmers. TypeScript is mainstream. Rust is seeing a lot of interest from big and small companies alike, and Rust's most unique feature (compile-time memory handling with no garbage collector at runtime) is possible because of research on type systems. Haskell is starting to see more serious interest not just from larger companies, but from startups that are taking off."}),"\n",(0,o.jsx)(t.p,{children:"A lot of effort into the more niche statically-typed functional programming languages and tools (e.g. Haskell, OCaml) has come from volunteer efforts and a few notable companies, as the number of industrial programmers in these ecosystems is still quite small. As more young companies develop talented engineers that push forward serious, statically-typed languages to do real work that can manage the insane complexity behind large-scale software, there's hope yet that programming will eventually become sane, and the tools, much more sophisticated. That's a future I can get behind."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)},pageOpts:{filePath:"pages/posts/the-incredible-irony-of-dynamically-typed-languages.md",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The Incredible Irony of Dynamically-Typed Languages",author:"Ani Ravi",date:"2021-05-11T00:00:00.000Z",tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."},timestamp:1682230677e3,pageMap:[{kind:"MdxPage",name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"MdxPage",name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The Short-Lived Journey of Our First Product",author:"Ani Ravi",date:"2020-02-20T00:00:00.000Z",tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{kind:"MdxPage",name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{kind:"MdxPage",name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:"2020-08-12T00:00:00.000Z",tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{kind:"MdxPage",name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:"2020-06-12T00:00:00.000Z",tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{kind:"MdxPage",name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software Engineering in the Early Days of a Product",author:"Ani Ravi",date:"2022-06-24T00:00:00.000Z",tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{kind:"MdxPage",name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell if you can already program in another language?",author:"Ani Ravi",date:"2021-03-21T00:00:00.000Z",tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{kind:"MdxPage",name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The Incredible Irony of Dynamically-Typed Languages",author:"Ani Ravi",date:"2021-05-11T00:00:00.000Z",tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{kind:"MdxPage",name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your Toy Project is Not Ready For Production",author:"Ani Ravi",date:"2020-04-11T00:00:00.000Z",tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{kind:"MdxPage",name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding Users is Actually Difficult",author:"Ani Ravi",date:"2022-03-12T00:00:00.000Z",tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{kind:"MdxPage",name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some Reflections on using Elixir in Production at a Small Startup",author:"Ani Ravi",date:"2022-03-11T00:00:00.000Z",tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{kind:"MdxPage",name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I Bought a Framework Laptop",author:"Ani Ravi",date:"2021-11-21T00:00:00.000Z",tag:"Passion",description:"A company that deserves to exist."}},{kind:"MdxPage",name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working On Things That Are Fun, But Don’t Matter",author:"Ani Ravi",date:"2020-08-04T00:00:00.000Z",tag:"Work, Passion",description:"Not everything is worth working on."}},{kind:"MdxPage",name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your Database is All You Are",author:"Ani Ravi",date:"2021-03-21T00:00:00.000Z",tag:"PostgreSQL, Databases",description:"Get serious about your data"}},{kind:"Meta",data:{"software-engineering-in-the-early-days-of-a-product":"Software Engineering in the Early Days of a Product","understanding-users-is-actually-difficult":"Understanding Users is Actually Difficult","using-elixir-in-production-at-a-small-startup":"Some Reflections on using Elixir in Production at a Small Startup","why-i-bought-a-framework-laptop":"Why I Bought a Framework Laptop","the-incredible-irony-of-dynamically-typed-languages":"The Incredible Irony of Dynamically-Typed Languages","special-about-haskell":"What’s special about Haskell if you can already program in another language?","your-database-is-all-your-are":"Your Database is All You Are","learning-graphql-through-postgraphile":"Learning GraphQL through PostGraphile","working-on-things-that-are-fun-but-dont-matter":"Working On Things That Are Fun, But Don’t Matter","move-off-orms-in-typescript":"Migrating Away From Query Builders and ORMs in JavaScript and TypeScript","toy-project-not-ready-for-production":"Your Toy Project is Not Ready For Production","first-product-journey":"The Short-Lived Journey of Our First Product",index:"Posts"}}]},{kind:"Meta",data:{index:"Home"}}],flexsearch:{codeblocks:!0},title:"The Incredible Irony of Dynamically-Typed Languages",headings:l},pageNextRoute:"/posts/the-incredible-irony-of-dynamically-typed-languages",nextraLayout:r.ZP,themeConfig:i.Z};t.default=(0,n.j)(d)},9717:function(e,t,a){"use strict";var o=a(1527);a(959);let n={comments:(0,o.jsx)(o.Fragment,{}),footer:(0,o.jsx)("div",{className:"my-4 border-t-2 mx-auto flex items-center sm:flex-row flex-col",children:(0,o.jsx)("p",{className:"text-sm text-gray-500",children:"Ani Ravi"})}),navs:[{url:"/feed.xml",name:"RSS"},{url:"https://github.com/aniravi24",name:"Github"}],darkMode:!0,dateFormatter:e=>new Date(e).toLocaleDateString("en-US",{day:"2-digit",year:"numeric",month:"short"})};t.Z=n}},function(e){e.O(0,[196,888,774,179],function(){return e(e.s=9701)}),_N_E=e.O()}]);