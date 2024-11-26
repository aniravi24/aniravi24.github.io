(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{1141:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/first-product-journey",function(){return a(110)}])},110:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d},useTOC:function(){return l}});var o=a(2676),n=a(7109),r=a(6047),i=a(405),s={src:"/_next/static/media/peppercustomeremail.a91da4d2.png",height:352,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX29vb9/f3d116fAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhJREFUeJxjYGAEAwYGBkZGMBvEQKYZGQEB2QAbIZpaSgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};function l(e){return[{value:"Background",id:"background",depth:3},{value:"First prototype",id:"first-prototype",depth:3},{value:"Launching our first\xa0MVP",id:"launching-our-firstmvp",depth:3},{value:"Mobile app",id:"mobile-app",depth:3},{value:"Launch.. round\xa02!",id:"launch-round2",depth:3},{value:"Slowing down",id:"slowing-down",depth:3}]}var d=(0,n.c)(function(e){let{toc:t=l(e)}=e,a={a:"a",h3:"h3",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h3,{id:t[0].id,children:t[0].value}),"\n",(0,o.jsxs)(a.p,{children:["Around March 2019, ",(0,o.jsx)(a.a,{href:"https://medium.com/u/89fcd3585f72",children:"Ethan Naluz"})," and I wanted to explore building a side project idea that we had, after exploring a huge problem space around getting benefits for gig workers (we didn’t do any work here — just explored the space). We wanted to figure out if we could somehow build the reCAPTCHA for phone calls, where someone has to press a random number before the call goes through. We were both getting robocalls, and we were getting tired of them."]}),"\n",(0,o.jsx)(a.p,{children:"Our unique insight was that instead of assuming that everyone is safe until proven guilty (as most spam blocking apps do), we assumed everyone was a spam caller unless proven otherwise (they were in your contacts or successfully passed our prompt)."}),"\n",(0,o.jsx)(a.h3,{id:t[1].id,children:t[1].value}),"\n",(0,o.jsxs)(a.p,{children:["We started working on a prototype to see if this was possible, and after nearly being discouraged, we found a way to make it work using a free SIP service called ",(0,o.jsx)(a.a,{href:"https://www.opensips.org/",children:"OpenSIPs"})," (we later used ",(0,o.jsx)(a.a,{href:"http://linphone.org/",children:"Linphone"})," because they had an app and it worked more reliably until we built a mobile app and got rid of our reliance on this service entirely). After this, we built a basic prototype within a few weeks that we started using live for ourselves. The prototype consisted of a backend that relied on you call forwarding and having a SIP app/account to receive calls. We did not need to build a UI ourselves for this prototype. We realized that we might be able to turn this into a product, so we started working on a web version of the application over the next few weeks as we were more familiar with web development and knew nothing about mobile development. Around this time, we called it “digital receptionist” because we didn’t have an actual name yet."]}),"\n",(0,o.jsxs)(a.p,{children:["Around May 2019, we had a nearly finished version of the product but had to go to San Francisco for summer internships at young Y Combinator startups. We had several work projects that consumed our time so we wanted to wait to launch the product, now called ",(0,o.jsx)(a.a,{href:"https://callpepper.co/#/",children:"Pepper"})," (Iron Man, anyone?). We didn’t feel right about launching a paid product to customers if we didn’t feel like we could be on top of customer support. While in SF, we got to demo the experience by happenstance to several people (I personally got to demo it to a few people at Y Combinator and a VC at Founders Fund as I was interviewing for a potential job at a portfolio company). Once we came back from San Francisco, we decided to finish incorporating our company and get Pepper live."]}),"\n",(0,o.jsx)(a.h3,{id:t[2].id,children:t[2].value}),"\n",(0,o.jsx)(a.p,{children:"We launched our minimum viable product (MVP) on the web quietly to a few of our friends. Some of our close friends signed up, and we promptly saw how bad the experience was. It was so bad that people couldn’t comfortably make it through and have any clue how to actually use the product. We had a feeling this would happen and knew that it was a less than stellar experience, but we wanted to try. It was a super clunky onboarding experience, where you had to sign up, create a SIP account (which was actually tied to a different service), download that service’s app, and then attempt to forward your number manually with a series of screenshots that we gave you. Call forwarding is the reason that Pepper worked — so if our customers couldn’t figure out how to do this, the product was useless."}),"\n",(0,o.jsx)(a.h3,{id:t[3].id,children:t[3].value}),"\n",(0,o.jsx)(a.p,{children:"We went back to the drawing board and decided to learn how to build a mobile app with React Native so we could create the experience we should’ve had from the start. We put our heads down and built out the app. Right before launch, we realized that some parts of our tech stack made things harder for us and we decided to spend a few days moving our entire JavaScript codebase (app and backend) from JavaScript to TypeScript, and moving from MongoDB to PostgreSQL. With TypeScript, we could actually get an idea of whether things worked by compiling the code first and having types instead of seeing the usual JS runtime errors (“undefined is not a function” is just my favorite). All of our data was relational, and it made no sense to use MongoDB. We also had to move off Stripe and use In-App Purchases (IAP) on Android and iOS. Apple declined our app when we tried using Stripe, but Google still approved it anyway and we might’ve gotten away with it for some time, but we decided to use IAP for both platforms. We also learned what it feels like to have Google and Apple take 30% of your revenue."}),"\n",(0,o.jsxs)(a.p,{children:["Ethan had done a tad bit of work with React Native, but this was the first app we had really built from the ground up. We initially started off using ",(0,o.jsx)(a.a,{href:"https://expo.io/",children:"Expo"}),", and later completely ripped it out to use barebones React Native (we needed native modules for several things). This made our app significantly smaller and also gave us more flexibility as we had become a lot more comfortable with this workflow. Going forward, we’d probably always build apps without Expo if it didn’t increase the workload by much. ",(0,o.jsx)(a.a,{href:"http://twilio.com",children:"Twilio"})," ran all of the calls, so we needed native modules to be able to use the Twilio SDKs. The calls are sent directly from our backend (or more precisely, Twilio) to the Pepper app over the internet."]}),"\n",(0,o.jsx)(a.h3,{id:t[4].id,children:t[4].value}),"\n",(0,o.jsxs)(a.p,{children:["As soon as we had our app ready, we ",(0,o.jsx)(a.a,{href:"https://www.linkedin.com/posts/aniravichandran_pepper-robocall-blocker-activity-6602614307870113792-HpQ1",children:"launched"})," around November 2019! It took us around 2 months to get the first version done. We were slow because it was our first time making an app (while in school as well) and also because there were several tasks that delayed the launch of our app not related to our own coding speed (random React Native build errors, getting our first app and account set up on the App Store/Google Play Store, etc). We “launched” by announcing the app on our social media profiles. The first day was really surprising to us. The app looked promising enough that we had people we had never spoken to sign up to our app and pay immediately before using it. The first page in our onboarding flow was the payment page, as we wanted to see what would happen if we did this. Not long after, we moved this further down the onboarding flow, and also offered a free trial (which we still do) largely motivated by strange issues for customers that we couldn’t always control."]}),"\n",(0,o.jsxs)(a.p,{children:["We spent time trying to fix as many of the issues that our early customers reported as possible, and got ready to figure out where else we could share our app. We initially thought we shouldn’t launch on ",(0,o.jsx)(a.a,{href:"https://www.producthunt.com/",children:"Product Hunt"})," because we weren’t good enough, but we decided there would be no harm in trying so we should go for it instead. On PH launch day, we got a little bit of traffic, but we were near the bottom of the list for the products that launched that day. We didn’t think much would come from Product Hunt, so we were getting ready to put our heads together to figure out where else we could share our app."]}),"\n",(0,o.jsxs)(a.p,{children:["This is when it got surreal and we learned how incredible serendipity can be when making something. I woke up the next morning to Ethan calling me, and I thought it was strange that I was getting a phone call. I picked up the phone, and he asked me if I’ve checked my notifications. I swiped down and saw hundreds of notifications. I saw a message from a Facebook friend asking how we got featured in the Product Hunt ",(0,o.jsx)(a.a,{href:"https://www.producthunt.com/newsletter/3727",children:"newsletter"}),". I told him that I had no idea, given that I also forgot they had one. I was looking through our upvotes on Product Hunt and put two and two together as to who may have seen our app and written about us."]}),"\n",(0,o.jsx)(a.p,{children:"It’s crazy to think that these two college students from Arizona building their first product ended up in the Product Hunt newsletter, and didn’t just occupy a small part of the newsletter, but almost the entire newsletter. We came up with some copy that we thought would be enjoyable yet informative and a nice GIF when we launched on Product Hunt (it was a fun inside joke for us, particularly the meditating girl at the end of our GIF), and they used some of the copy/graphics we came up with verbatim in the newsletter (this made us happy)!"}),"\n",(0,o.jsx)(a.p,{children:"Our servers were having issues because of the hundreds of people that were signing up, and we were working as fast as we could to address some of the major issues that were breaking the signup flow and spent most of the day together on customer support. After that day, we finally had a little time to go fix more of the issues that customers were reporting. We had another traffic spike when Product Hunt used that same newsletter for the weekly digest, right before we were about to launch an app update that we hoped would fix several bugs (the blessing and curse of attention)."}),"\n",(0,o.jsxs)(a.p,{children:["We were learning a ton at a rapid pace, and we learned how much has to go right when you make a product. Your sleep schedule can get pretty messed up if you’re not disciplined. We prioritized responding to customer support messages as soon as possible. I would get up in the morning and the first thing I was doing for a while was responding to all the customer support requests that came in before I started my day. On the development side, we found several new tools that were amazing additions to our workflow (e.g. ",(0,o.jsx)(a.a,{href:"https://github.com/microsoft/react-native-code-push",children:"CodePush"}),", ",(0,o.jsx)(a.a,{href:"https://fastlane.tools/",children:"Fastlane"}),"). If you’re a developer reading this, a huge pro-tip is to integrate some kind of error reporting (e.g. ",(0,o.jsx)(a.a,{href:"https://www.bugsnag.com/",children:"Bugsnag"}),") and/or analytics into your app BEFORE launch — we took way too long to do this."]}),"\n",(0,o.jsxs)(a.p,{children:["We discovered all sorts of things that we never knew before, more than I could possibly recall and enumerate here. For example, Twilio’s upstream carrier ",(0,o.jsx)(a.a,{href:"https://support.twilio.com/hc/en-us/articles/223179988-Why-am-I-getting-calls-from-these-strange-numbers-",children:"marks"})," certain numbers by the digits you would see on a dial-pad (e.g. +266696687 means “ANONYMOUS”). Looking back, we mistakenly told several customers that the app wouldn’t work for them when it actually may have. This was because we had restricted all calls to only work inside the US due to the costs for going international and other concerns (but we could support you as long as you had a US phone number). We would see these strange numbers and not realize what was going on, and it took us a while to figure out that these specific numbers meant something. In another situation, we discovered that most of our customers on Apple devices were not getting any push notifications from us because we had missed one line of code in the app. With that situation, we only found out because we were looking at a churned customer’s info in the database and realized that the token for sending Apple notifications was missing for that customer, and ultimately most Apple customers. We got lucky that we found that issue as soon as we did, but we already had a bunch of customers at that point. These are just a few of many things that had our hair on fire."]}),"\n",(0,o.jsx)(a.p,{children:"As things slowed down, we were trying to debug one major problem (people not receiving calls). We tried our best to solve it, but still actively churned customers who were having issues. It felt like we were working with a huge black box and we didn’t own any of the infrastructure around calls, so we often had little clue what was going on. As much as we love someone else doing the work for us — this can also be a giant double-edged sword. We knew that our app couldn’t scale if we didn’t solve these problems."}),"\n",(0,o.jsx)(a.p,{children:"Additionally, the way that our app works is that we have you forward all your calls to us, so we handle all incoming phone calls. We weren’t sure if the business model would work, given that we get charged per minute with all incoming calls. With our web MVP, we had an ugly pricing scheme with four tiers and usage-based pricing that was far too confusing for anyone to wrap their head around. When we launched the mobile app, we changed that to only be one option (flat-rate of $6/month), hoping it would cover our costs based on some rudimentary spreadsheet modeling we had done. So far, it seems like we’ve made money if you only look at the cost to make the product and the amount we’re charging customers (our margins aren’t as great as we would want though). We worried that this price might be too high, but we were (and currently are) college students that were bootstrapping this with our own money. We couldn’t afford to lose a lot of money on this, particularly when our costs had the possibility of being extremely high."}),"\n",(0,o.jsx)(a.h3,{id:t[5].id,children:t[5].value}),"\n",(0,o.jsx)(a.p,{children:"Once January 2020 came along, app development was mainly focused on fixing major issues and we mostly stayed quiet. After some time, we weren’t confident about being able to scale this reliably since we didn’t own a good chunk of the product experience (because the heavy lifting was largely done by other services). We also recognized something that arguably was the most important thing in this particular situation — we didn’t care much about what we were building. We initially were motivated by the problem since it was personal to some degree, but we mostly built it because we like making things together, not because we were passionate about the problem. Robocalls are an extremely real problem, but it wasn’t one that we could see ourselves doing the gargantuan amount of work going forward to actually solve. We didn’t feel passionate enough about our own product to actually go sell to consumers. Remember, thus far, all the traffic we’ve gotten is organic and from launch sites like Product Hunt and BetaList (we still have people trickling in from those sites to the time of this writing). We shared this feeling even before we had launched the product, but we thought we’d give it a sincere try just to see what happened. It was an incredible experience, but we knew we wouldn’t want to take it further in any meaningful way."}),"\n",(0,o.jsx)(a.p,{children:"That brings us to now. Pepper is still running (for now), and we announced to our currently active customers a few days ago that Pepper will continue running but we won’t actively be working on it or providing app updates (however we are available for customer support if we can help our customers with something). We plan to send another email in the future if/when we decide to shut down the product entirely."}),"\n",(0,o.jsxs)(a.p,{children:["We’ve handled around 10k+ calls on our service so far, and have blocked 4.5k+ robocalls (we weren’t tracking certain calls properly at the beginning, so this number is likely higher). If you look at those numbers, you may also notice something that was just as mind-boggling as one of the ",(0,o.jsx)(a.a,{href:"https://firstorion.com/nearly-50-of-u-s-mobile-traffic-will-be-scam-calls-by-2019/",children:"stats"})," we saw. ",(0,o.jsx)(a.strong,{children:"The number of potential robocalls we blocked was nearly half of all the calls that went through our service"})," (also remember, we only handle incoming calls)."]}),"\n",(0,o.jsx)(a.hr,{}),"\n",(0,o.jsx)(a.p,{children:"We have amazing customers. After announcing that we were not actively working on this any further, one of the emails we received was the following."}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{placeholder:"blur",src:s})}),"\n",(0,o.jsx)(a.p,{children:"Customer Email"}),"\n",(0,o.jsx)(a.p,{children:"This is one of our customers that wants to keep using and paying for an app that isn’t being actively maintained. I felt something special in a way I don’t know how to explain. It may seem small, but it’s just a joy to see as a maker."}),"\n",(0,o.jsx)(a.p,{children:"We’ve learned a ton and have also learned a lot about the experience of making something, even if the journey from launch with actual users to being inactive was only a few months. We have a lot of respect for anyone that tries to make something people want. We found that we had made something that at least some people wanted. That was amazing to experience firsthand."}),"\n",(0,o.jsx)(a.p,{children:"Thanks to everyone (and particularly our amazing customers that took a chance on us) for coming along for the ride. We’re exploring something new as we get closer to graduating college. We’ll see how far along we can get!"})]})},"/posts/first-product-journey",{filePath:"pages/posts/first-product-journey.md",timestamp:1732650551e3,pageMap:r.v,frontMatter:{title:"The short-lived journey of our first product",author:"Ani Ravi",date:"2020-02-20",tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"},title:"The short-lived journey of our first product"},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)},6047:function(e,t,a){"use strict";a.d(t,{v:function(){return o}});let o=[{name:"index",route:"/",frontMatter:{type:"page",title:"Home"}},{name:"posts",route:"/posts",children:[{name:"an-underrated-part-of-using-graphql",route:"/posts/an-underrated-part-of-using-graphql",frontMatter:{title:"An underrated part of using GraphQL",author:"Ani Ravi",date:new Date(16760736e5),tag:"Programming, GraphQL, Libraries",description:"Consistent naming."}},{name:"first-product-journey",route:"/posts/first-product-journey",frontMatter:{title:"The short-lived journey of our first product",author:"Ani Ravi",date:new Date(15821568e5),tag:"Pepper, Product, Startups",description:"The story of Pepper, our first app.",image:"/images/pepperlogo.png"}},{name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts"}},{name:"learning-graphql-through-postgraphile",route:"/posts/learning-graphql-through-postgraphile",frontMatter:{title:"Learning GraphQL through PostGraphile",author:"Ani Ravi",date:new Date(15971904e5),tag:"GraphQL, PostGraphile",description:"You will learn about SQL too"}},{name:"long-term-vs-short-term-career-choices",route:"/posts/long-term-vs-short-term-career-choices",frontMatter:{title:"Long-term vs short-term career choices",author:"Ani Ravi",date:new Date(17278272e5),tag:"Career, Life",description:"One potential path to long-term success"}},{name:"move-off-orms-in-typescript",route:"/posts/move-off-orms-in-typescript",frontMatter:{title:"Migrating away from query builders and ORMs in JavaScript and TypeScript",author:"Ani Ravi",date:new Date(159192e7),tag:"ORMs, JavaScript, TypeScript",description:"Alternatives"}},{name:"software-engineering-in-the-early-days-of-a-product",route:"/posts/software-engineering-in-the-early-days-of-a-product",frontMatter:{title:"Software engineering in the early days of a product",author:"Ani Ravi",date:new Date(16560288e5),tag:"Engineering, Technology",description:"Some things I've learned about building software in the early days of something new."}},{name:"special-about-haskell",route:"/posts/special-about-haskell",frontMatter:{title:"What’s special about Haskell?",author:"Ani Ravi",date:new Date(16162848e5),tag:"Haskell, Programming, Languages",description:"What’s special about Haskell if you can already program in another language?"}},{name:"stand-out-engineering-team",route:"/posts/stand-out-engineering-team",frontMatter:{title:"How to make an engineering team stand out",author:"Ani Ravi",date:new Date(17290368e5),tag:"Company, Startup, Engineering",description:"What many engineering teams seem to miss"}},{name:"starting-a-company",route:"/posts/starting-a-company",frontMatter:{title:"Musings on starting a company",author:"Ani Ravi",date:new Date(17278272e5),tag:"Company, Startup",description:"When to start a company"}},{name:"the-future-of-typescript",route:"/posts/the-future-of-typescript",frontMatter:{title:"The future of TypeScript",author:"Ani Ravi",date:new Date(16760736e5),tag:"TypeScript, Programming, Effect, Functional, Libraries",description:"This set of libraries will revolutionize how we write TypeScript."}},{name:"the-incredible-irony-of-dynamically-typed-languages",route:"/posts/the-incredible-irony-of-dynamically-typed-languages",frontMatter:{title:"The incredible irony of dynamically-typed languages",author:"Ani Ravi",date:new Date(16206912e5),tag:"Programming, Types, Languages, Dynamic",description:"Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."}},{name:"toy-project-not-ready-for-production",route:"/posts/toy-project-not-ready-for-production",frontMatter:{title:"Your toy project is not ready for production",author:"Ani Ravi",date:new Date(15865632e5),tag:"Toys, Project, Production, Development",description:"Tales of a developer."}},{name:"understanding-users-is-actually-difficult",route:"/posts/understanding-users-is-actually-difficult",frontMatter:{title:"Understanding users is actually difficult",author:"Ani Ravi",date:new Date(16470432e5),tag:"Startups, Users",description:"Building software is easier nowadays - figuring out what software to build is tough."}},{name:"using-elixir-in-production-at-a-small-startup",route:"/posts/using-elixir-in-production-at-a-small-startup",frontMatter:{title:"Some reflections on using elixir in production at a small startup",author:"Ani Ravi",date:new Date(16469568e5),tag:"Elixir, Programming Languages",description:"Using Elixir in production"}},{name:"why-i-bought-a-framework-laptop",route:"/posts/why-i-bought-a-framework-laptop",frontMatter:{title:"Why I bought a Framework laptop",author:"Ani Ravi",date:new Date(16374528e5),tag:"Passion",description:"A company that deserves to exist."}},{name:"working-on-things-that-are-fun-but-dont-matter",route:"/posts/working-on-things-that-are-fun-but-dont-matter",frontMatter:{title:"Working on things that are fun, but don’t matter",author:"Ani Ravi",date:new Date(15964992e5),tag:"Work, Passion",description:"Not everything is worth working on."}},{name:"your-database-is-all-your-are",route:"/posts/your-database-is-all-your-are",frontMatter:{title:"Your database is all you are",author:"Ani Ravi",date:new Date(16162848e5),tag:"PostgreSQL, Databases",description:"Get serious about your data"}}]},{name:"tags",route:"/tags",children:[]}]}},function(e){e.O(0,[109,888,774,179],function(){return e(e.s=1141)}),_N_E=e.O()}]);