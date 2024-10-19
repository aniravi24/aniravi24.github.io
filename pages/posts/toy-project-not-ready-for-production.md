---
title: Your toy project is not ready for production
author: Ani Ravi
date: 2020-04-11
tag: Toys, Project, Production, Development
description: Tales of a developer.
---

As I’ve been building products with [Ethan Naluz](https://medium.com/@ethannaluz), one thing we re-learn time and time again is that making software robust in unpredictably different environments is tough. It’s easy to build a toy project and say that you learned how to use some new tool, library, or language quickly, but the real work in software engineering is in the last “10%”. It’s to make something run in a production environment, not just on your development machine. Have a view that sometimes renders correctly or has a strange breaking edge case that you notice? You can ignore that in a toy project, but it has to be taken care of for a proper experience in production. Your WebSockets don’t reconnect when the server restarts? You can handle this fine with a toy project — just restart the server. In production, stuff like this HAS to work.

With the [current idea](https://foodfeed.live/#/) that we’re working on, we had a prototype in a few days and a more production-ready prototype within a few weeks. We realized that the way we built it had no chance at scaling one particular feature in the event that we got users (and would be painful to re-architect after getting users), so we had to go back to the drawing board for pieces of it. Prior to working on our current idea, we had worked on a robocall-blocking app called [Pepper](https://callpepper.co/#/). We tested it again and again on our machines, getting the experience to what we thought was “good enough”. Guess what happened when we shipped? Issues across the board for users, largely due to things not under our control (on the bright side, people still really wanted it).

Don’t even get me started on DevOps. Your toy project can run locally or on a tiny Heroku server and get through the day. Guess what, now you need to manage state across 5 servers, and can’t duplicate certain information. You have socket connections across 5 servers and need to manage how your connections hit the servers. Security? Whoops, turns out that your web service can be accessed publicly and has no way to stop people from connecting to it. Looks like people can easily flood you with requests too as long as they know what to send you. And on and on...

All of the things that don’t matter when your software is being used by 100 people will painfully crush you when it’s being used by 100,000 people. Of course, most of us building something from the ground up only dream of having 100,000+ users in the first place, so there’s a balance to not over-optimizing or trying to make everything perfect. The bar for having a decent experience with your software does seem to have gotten higher though, as we’ve gotten accustomed to good design and smooth experiences.

I haven’t written that much about the technical lessons we’ve learned throughout our time building things, but I may start writing a bit more about that.
