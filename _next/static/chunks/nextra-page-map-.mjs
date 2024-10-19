export const pageMap = [{
  name: "index",
  route: "/",
  frontMatter: {
    "type": "page",
    "title": "Home"
  }
}, {
  name: "posts",
  route: "/posts",
  children: [{
    name: "an-underrated-part-of-using-graphql",
    route: "/posts/an-underrated-part-of-using-graphql",
    frontMatter: {
      "title": "An underrated part of using GraphQL",
      "author": "Ani Ravi",
      "date": new Date(1676073600000),
      "tag": "Programming, GraphQL, Libraries",
      "description": "Consistent naming."
    }
  }, {
    name: "first-product-journey",
    route: "/posts/first-product-journey",
    frontMatter: {
      "title": "The short-lived journey of our first product",
      "author": "Ani Ravi",
      "date": new Date(1582156800000),
      "tag": "Pepper, Product, Startups",
      "description": "The story of Pepper, our first app.",
      "image": "/images/pepperlogo.png"
    }
  }, {
    name: "index",
    route: "/posts",
    frontMatter: {
      "type": "posts",
      "title": "Posts"
    }
  }, {
    name: "learning-graphql-through-postgraphile",
    route: "/posts/learning-graphql-through-postgraphile",
    frontMatter: {
      "title": "Learning GraphQL through PostGraphile",
      "author": "Ani Ravi",
      "date": new Date(1597190400000),
      "tag": "GraphQL, PostGraphile",
      "description": "You will learn about SQL too"
    }
  }, {
    name: "long-term-vs-short-term-career-choices",
    route: "/posts/long-term-vs-short-term-career-choices",
    frontMatter: {
      "title": "Long-term vs short-term career choices",
      "author": "Ani Ravi",
      "date": new Date(1727827200000),
      "tag": "Career, Life",
      "description": "What differentiates long-term winners from everyone else?"
    }
  }, {
    name: "move-off-orms-in-typescript",
    route: "/posts/move-off-orms-in-typescript",
    frontMatter: {
      "title": "Migrating away from query builders and ORMs in JavaScript and TypeScript",
      "author": "Ani Ravi",
      "date": new Date(1591920000000),
      "tag": "ORMs, JavaScript, TypeScript",
      "description": "Alternatives"
    }
  }, {
    name: "software-engineering-in-the-early-days-of-a-product",
    route: "/posts/software-engineering-in-the-early-days-of-a-product",
    frontMatter: {
      "title": "Software engineering in the early days of a product",
      "author": "Ani Ravi",
      "date": new Date(1656028800000),
      "tag": "Engineering, Technology",
      "description": "Some things I've learned about building software in the early days of something new."
    }
  }, {
    name: "special-about-haskell",
    route: "/posts/special-about-haskell",
    frontMatter: {
      "title": "What’s special about Haskell if you can already program in another language?",
      "author": "Ani Ravi",
      "date": new Date(1616284800000),
      "tag": "Haskell, Programming, Languages",
      "description": "What’s special about Haskell if you can already program in another language?"
    }
  }, {
    name: "stand-out-engineering-team",
    route: "/posts/stand-out-engineering-team",
    frontMatter: {
      "title": "How to make an engineering team stand out",
      "author": "Ani Ravi",
      "date": new Date(1729036800000),
      "tag": "Company, Startup, Engineering",
      "description": "What many engineering teams seem to miss"
    }
  }, {
    name: "starting-a-company",
    route: "/posts/starting-a-company",
    frontMatter: {
      "title": "Starting a company - my final act of desperation",
      "author": "Ani Ravi",
      "date": new Date(1727827200000),
      "tag": "Company, Startup",
      "description": "When to start a company"
    }
  }, {
    name: "the-future-of-typescript",
    route: "/posts/the-future-of-typescript",
    frontMatter: {
      "title": "The future of TypeScript",
      "author": "Ani Ravi",
      "date": new Date(1676073600000),
      "tag": "TypeScript, Programming, Effect, Functional, Libraries",
      "description": "This set of libraries will revolutionize how we write TypeScript."
    }
  }, {
    name: "the-incredible-irony-of-dynamically-typed-languages",
    route: "/posts/the-incredible-irony-of-dynamically-typed-languages",
    frontMatter: {
      "title": "The incredible irony of dynamically-typed languages",
      "author": "Ani Ravi",
      "date": new Date(1620691200000),
      "tag": "Programming, Types, Languages, Dynamic",
      "description": "Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."
    }
  }, {
    name: "toy-project-not-ready-for-production",
    route: "/posts/toy-project-not-ready-for-production",
    frontMatter: {
      "title": "Your toy project is not ready for production",
      "author": "Ani Ravi",
      "date": new Date(1586563200000),
      "tag": "Toys, Project, Production, Development",
      "description": "Tales of a developer."
    }
  }, {
    name: "understanding-users-is-actually-difficult",
    route: "/posts/understanding-users-is-actually-difficult",
    frontMatter: {
      "title": "Understanding users is actually difficult",
      "author": "Ani Ravi",
      "date": new Date(1647043200000),
      "tag": "Startups, Users",
      "description": "Building software is easier nowadays - figuring out what software to build is tough."
    }
  }, {
    name: "using-elixir-in-production-at-a-small-startup",
    route: "/posts/using-elixir-in-production-at-a-small-startup",
    frontMatter: {
      "title": "Some reflections on using elixir in production at a small startup",
      "author": "Ani Ravi",
      "date": new Date(1646956800000),
      "tag": "Elixir, Programming Languages",
      "description": "Using Elixir in production"
    }
  }, {
    name: "why-i-bought-a-framework-laptop",
    route: "/posts/why-i-bought-a-framework-laptop",
    frontMatter: {
      "title": "Why I bought a Framework laptop",
      "author": "Ani Ravi",
      "date": new Date(1637452800000),
      "tag": "Passion",
      "description": "A company that deserves to exist."
    }
  }, {
    name: "working-on-things-that-are-fun-but-dont-matter",
    route: "/posts/working-on-things-that-are-fun-but-dont-matter",
    frontMatter: {
      "title": "Working on things that are fun, but don’t matter",
      "author": "Ani Ravi",
      "date": new Date(1596499200000),
      "tag": "Work, Passion",
      "description": "Not everything is worth working on."
    }
  }, {
    name: "your-database-is-all-your-are",
    route: "/posts/your-database-is-all-your-are",
    frontMatter: {
      "title": "Your database is all you are",
      "author": "Ani Ravi",
      "date": new Date(1616284800000),
      "tag": "PostgreSQL, Databases",
      "description": "Get serious about your data"
    }
  }]
}, {
  name: "tags",
  route: "/tags",
  children: []
}];