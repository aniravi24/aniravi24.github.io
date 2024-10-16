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
    name: "first-product-journey",
    route: "/posts/first-product-journey",
    frontMatter: {
      "title": "The Short-Lived Journey of Our First Product",
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
    name: "move-off-orms-in-typescript",
    route: "/posts/move-off-orms-in-typescript",
    frontMatter: {
      "title": "Migrating Away From Query Builders and ORMs in JavaScript and TypeScript",
      "author": "Ani Ravi",
      "date": new Date(1591920000000),
      "tag": "ORMs, JavaScript, TypeScript",
      "description": "Alternatives"
    }
  }, {
    name: "software-engineering-in-the-early-days-of-a-product",
    route: "/posts/software-engineering-in-the-early-days-of-a-product",
    frontMatter: {
      "title": "Software Engineering in the Early Days of a Product",
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
    name: "the-incredible-irony-of-dynamically-typed-languages",
    route: "/posts/the-incredible-irony-of-dynamically-typed-languages",
    frontMatter: {
      "title": "The Incredible Irony of Dynamically-Typed Languages",
      "author": "Ani Ravi",
      "date": new Date(1620691200000),
      "tag": "Programming, Types, Languages, Dynamic",
      "description": "Dynamically-typed programming sucks in a real, production codebase. Or anything with more than 10 lines of code."
    }
  }, {
    name: "toy-project-not-ready-for-production",
    route: "/posts/toy-project-not-ready-for-production",
    frontMatter: {
      "title": "Your Toy Project is Not Ready For Production",
      "author": "Ani Ravi",
      "date": new Date(1586563200000),
      "tag": "Toys, Project, Production, Development",
      "description": "Tales of a developer."
    }
  }, {
    name: "understanding-users-is-actually-difficult",
    route: "/posts/understanding-users-is-actually-difficult",
    frontMatter: {
      "title": "Understanding Users is Actually Difficult",
      "author": "Ani Ravi",
      "date": new Date(1647043200000),
      "tag": "Startups, Users",
      "description": "Building software is easier nowadays - figuring out what software to build is tough."
    }
  }, {
    name: "using-elixir-in-production-at-a-small-startup",
    route: "/posts/using-elixir-in-production-at-a-small-startup",
    frontMatter: {
      "title": "Some Reflections on using Elixir in Production at a Small Startup",
      "author": "Ani Ravi",
      "date": new Date(1646956800000),
      "tag": "Elixir, Programming Languages",
      "description": "Using Elixir in production"
    }
  }, {
    name: "why-i-bought-a-framework-laptop",
    route: "/posts/why-i-bought-a-framework-laptop",
    frontMatter: {
      "title": "Why I Bought a Framework Laptop",
      "author": "Ani Ravi",
      "date": new Date(1637452800000),
      "tag": "Passion",
      "description": "A company that deserves to exist."
    }
  }, {
    name: "working-on-things-that-are-fun-but-dont-matter",
    route: "/posts/working-on-things-that-are-fun-but-dont-matter",
    frontMatter: {
      "title": "Working On Things That Are Fun, But Don’t Matter",
      "author": "Ani Ravi",
      "date": new Date(1596499200000),
      "tag": "Work, Passion",
      "description": "Not everything is worth working on."
    }
  }, {
    name: "your-database-is-all-your-are",
    route: "/posts/your-database-is-all-your-are",
    frontMatter: {
      "title": "Your Database is All You Are",
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