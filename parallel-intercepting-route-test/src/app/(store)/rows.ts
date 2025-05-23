export type Comment = {
  author: string,
  content: string,
}

export enum Category {
  programming = "Programming",
  etc = "ETC",
  food = "FOOD",
  music = "MUSIC",
}

export type Row = {
  title: string,
  likes: number,
  isLikeTapped: boolean,
  author: string,
  content: string,
  category: Category,
  comments: Comment[],
}

export const rows: Row[] = [
  {
    title: "Hello",
    likes: 10,
    isLikeTapped: false,
    author: "John",
    content: "Hello World",
    category: Category.etc,
    comments: [
      {
        author: "Amy",
        content: "Good Morning",
      },
      {
        author: "Cool person",
        content: "Good to see you",
      },
      {
        author: "Miranda",
        content: "Have you ever meet the manager?",
      }
    ]
  },
  {
    title: "Best Ramen Spots in Town",
    likes: 156,
    isLikeTapped: true,
    author: "Sarah",
    content: "I explored some amazing ramen shops in the city and here are my top recommendations. From tonkotsu to miso ramen, these places serve authentic Japanese flavors.",
    category: Category.food,
    comments: [
      {
        author: "Mike",
        content: "Thanks for the recommendations! The shoyu ramen at place #3 is incredible!"
      }
    ]
  },
  {
    title: "React Hooks Deep Dive",
    likes: 234,
    isLikeTapped: false,
    author: "David",
    content: "Understanding React Hooks is crucial for modern React development. Here's my comprehensive guide on useEffect, useState, and custom hooks. I'll explain common pitfalls and best practices.",
    category: Category.programming,
    comments: [
      {
        author: "Elena",
        content: "Your explanation about dependency arrays in useEffect really cleared things up for me. I was making the mistake of ignoring the ESLint warnings."
      }
    ]
  },
  {
    title: "Top 10 Jazz Albums of 2023",
    likes: 189,
    isLikeTapped: true,
    author: "Emily",
    content: "This year has been amazing for jazz music. Here's my curated list of must-listen jazz albums that showcase incredible musicianship and innovation.",
    category: Category.music,
    comments: [
      {
        author: "Chris",
        content: "Great selection! I especially loved the new album by The Bad Plus."
      }
    ]
  },
  {
    title: "CSS Grid vs Flexbox",
    likes: 145,
    isLikeTapped: false,
    author: "Michael",
    content: "When should you use CSS Grid vs Flexbox? This is a common question I get. Today, I'll break down the use cases for each and show practical examples where one might be better than the other.",
    category: Category.programming,
    comments: [
      {
        author: "Sophie",
        content: "This comparison really helped me understand when to use each layout method. The visual examples were particularly helpful!"
      }
    ]
  },
  {
    title: "Homemade Pizza Secrets",
    likes: 267,
    isLikeTapped: true,
    author: "Alex",
    content: "After years of practice, I've perfected my homemade pizza recipe. Here's everything you need to know about dough preparation, sauce making, and achieving the perfect crust.",
    category: Category.food,
    comments: [
      {
        author: "James",
        content: "Tried your dough recipe and it was amazing! The tip about temperature control made all the difference."
      }
    ]
  },
  {
    title: "Classical Guitar Techniques",
    likes: 198,
    isLikeTapped: false,
    author: "Lisa",
    content: "Whether you're a beginner or intermediate classical guitarist, these essential techniques will help improve your playing. We'll cover fingerpicking, positioning, and practice routines.",
    category: Category.music,
    comments: [
      {
        author: "Daniel",
        content: "These exercises really helped improve my fingerpicking technique. Thank you!"
      }
    ]
  },
  {
    title: "API Design",
    likes: 178,
    isLikeTapped: true,
    author: "Robert",
    content: "Good API design is crucial for building maintainable applications. Today, we'll explore RESTful principles, GraphQL, and how to structure your endpoints for optimal usage.",
    category: Category.programming,
    comments: [
      {
        author: "Maria",
        content: "The section about GraphQL vs REST was particularly insightful. I'm considering switching my next project to GraphQL."
      }
    ]
  },
  {
    title: "Testing Strategies",
    likes: 145,
    isLikeTapped: false,
    author: "Jennifer",
    content: "Unit tests, integration tests, and end-to-end tests all have their place. Let's discuss testing strategies and how to achieve the right balance for your project.",
    category: Category.programming,
    comments: [
      {
        author: "Tom",
        content: "Finally, a clear explanation of different testing types! The testing pyramid concept really clicked for me."
      }
    ]
  },
  {
    title: "Best Coffee Brewing Methods",
    likes: 223,
    isLikeTapped: true,
    author: "Mark",
    content: "From pour-over to French press, let's explore different coffee brewing methods and how they affect taste. I'll share my tips for getting the perfect cup every time.",
    category: Category.food,
    comments: [
      {
        author: "Anna",
        content: "Your V60 technique changed my morning coffee game completely!"
      }
    ]
  },
  {
    title: "Vinyl Collection Essentials",
    likes: 167,
    isLikeTapped: false,
    author: "Paul",
    content: "Starting a vinyl collection? Here's everything you need to know about equipment, maintenance, and building a great record collection.",
    category: Category.music,
    comments: [
      {
        author: "Kevin",
        content: "Great advice on turntable setup. My records sound so much better now!"
      }
    ]
  },
  {
    title: "Git Advanced Tips",
    likes: 189,
    isLikeTapped: true,
    author: "Rachel",
    content: "Beyond basic git commands, there are powerful features that can make your version control workflow more efficient. Let's dive into rebasing, cherry-picking, and more.",
    category: Category.programming,
    comments: [
      {
        author: "Steve",
        content: "The interactive rebase explanation was a game-changer for me. Now I can keep my commit history clean and meaningful."
      }
    ]
  },
  {
    title: "Security Best Practices",
    likes: 256,
    isLikeTapped: false,
    author: "Alan",
    content: "Web security should be a top priority. Let's discuss common vulnerabilities, how to prevent them, and best practices for keeping your applications secure.",
    category: Category.programming,
    comments: [
      {
        author: "Linda",
        content: "The section about XSS and CSRF was particularly helpful. I'm implementing these security measures in my current project."
      }
    ]
  },
  {
    title: "Code Review Tips",
    likes: 134,
    isLikeTapped: true,
    author: "Jessica",
    content: "Effective code reviews can improve code quality and team collaboration. Here's how to give and receive constructive feedback during code reviews.",
    category: Category.etc,
    comments: [
      {
        author: "Brian",
        content: "These guidelines have helped our team make code reviews more productive and less confrontational."
      }
    ]
  },
  {
    title: "Summer Cocktail Recipes",
    likes: 178,
    isLikeTapped: false,
    author: "William",
    content: "Beat the heat with these refreshing summer cocktail recipes. From mojitos to margaritas, these drinks are perfect for your next outdoor gathering.",
    category: Category.food,
    comments: [
      {
        author: "Emma",
        content: "Made the watermelon mojito for my party - it was a huge hit!"
      }
    ]
  },
  {
    title: "CI/CD Pipeline",
    likes: 198,
    isLikeTapped: true,
    author: "Thomas",
    content: "Setting up a robust CI/CD pipeline can streamline your deployment process. Here's a detailed guide on setting up automated testing and deployment.",
    category: Category.programming,
    comments: [
      {
        author: "Diana",
        content: "This helped me set up my first CI/CD pipeline! The GitHub Actions example was particularly useful."
      }
    ]
  },
  {
    title: "Guitar Pedal Reviews",
    likes: 145,
    isLikeTapped: false,
    author: "George",
    content: "A comprehensive review of the latest guitar effects pedals. We'll look at delay, reverb, overdrive, and more to help you build your perfect pedalboard.",
    category: Category.music,
    comments: [
      {
        author: "Helen",
        content: "The comparison between analog and digital delays was super helpful!"
      }
    ]
  },
  {
    title: "Browser Storage",
    likes: 167,
    isLikeTapped: true,
    author: "Catherine",
    content: "Understanding different browser storage options is crucial. Let's compare localStorage, sessionStorage, cookies, and IndexedDB with practical examples.",
    category: Category.programming,
    comments: [
      {
        author: "Peter",
        content: "The comparison table of different storage options was super helpful in choosing the right solution for my use case."
      }
    ]
  },
  {
    title: "Web Workers",
    likes: 189,
    isLikeTapped: false,
    author: "Andrew",
    content: "Web Workers can help improve performance by running scripts in background threads. Here's how to implement them effectively in your web applications.",
    category: Category.programming,
    comments: [
      {
        author: "Julia",
        content: "Great explanation of Web Workers! I never knew they could be so useful for improving performance."
      }
    ]
  },
  {
    title: "Progressive Web Apps",
    likes: 234,
    isLikeTapped: true,
    author: "Benjamin",
    content: "Progressive Web Apps combine the best of web and native apps. Let's explore service workers, manifest files, and how to make your app installable.",
    category: Category.programming,
    comments: [
      {
        author: "Laura",
        content: "The step-by-step guide to implementing service workers was exactly what I needed. Now my app works offline!"
      }
    ]
  },
  {
    title: "WebAssembly Basics",
    likes: 156,
    isLikeTapped: false,
    author: "Samuel",
    content: "WebAssembly is opening new possibilities for web performance. Let's explore how to get started with WASM and when it makes sense to use it.",
    category: Category.programming,
    comments: [
      {
        author: "Oliver",
        content: "Thanks for demystifying WebAssembly! The performance comparisons were particularly interesting."
      }
    ]
  }
]

