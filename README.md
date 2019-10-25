# React: The Next(js) Generation

Welcome. I'm going to be updating this readme with an explanation of npm scripts and npm packages in this project. I'm also going to lay out the architectural philosophy. At the low level, I want to flesh out what I'm doing with all that redux middleware. I might also do a version of this project with Apollo, and I might add a GraphQL/Express API too, but that is more on the backburner right at this moment.

For those not familiar, Next.js is many things. I think it is simplest to call it a build tool, as you can also build your React project with create-react-app, Gatsby, or custom-made Webpack and Babel. The problem with writing those configs yourself, from scratch, is optimization is hard, annoying, and a tech debt that must continually paid to receive upstream updates. CRA (create-react-app) is 'good defaults'. Gatsby is 'great defaults' and a great plugin community, albeit with some limitations. Next is both more opinionated *and* more hands off than CRA, and I find this mix ideal. I've come to love the file system routing, and I like the ability to easily and cleanly bring my own Babel and Webpack config modifications. It doesn't have the template community of Gatsby, but pretty templates are far more great advertising than they are truly useful to a developer.

To get a bit more technical, Next can statically build your site and have the client receive it and then hydrate it into a full PWA. Gatsby does this too. Right from the start, you should have excellent Lighthouse scores because you don't need to write a ton of Webpack and Babel.

So, that is what Next can do as a build tool. What else can it do? Well, it can render pages on the server and deliver these pages as clients request them, much like Django, Ruby on Rails and a host of other web frameworks circa '05 - '15. This is valuable if you run a huge site so that either it is too expensive/painful to continually rebuild your site statically, or it is time sensitive, and you want back end changes to be seen immediately on the client (without relying upon client-side rendering).

That's not all, folks! Say you have a big site and you want to split it up into micro frontends. Next.js makes this trivial to do. You can enable `zones`, which will export every subdirectory under `/pages` into its own separate app for serving. You would just need a proxy to direct between them. This means you can build it as a monolith and then opt-in whenever you are ready with essentially no other changes of your own. Additionally, due to the file path routing, it is absolutely trivial to separate one Next app repo into two or more. This approach would really lend itself to taking  monolith and going to using `lerna` packages.

You can also target React Native and Electron with your Next.js app. In other words, you can build for any platform.


## Features

- components
  - react
    - hooks
- state
  - redux
    - middleware
      - thunk
      - promise
      - logger
- content
  - mdx
- styling
  - emotion
    - css prop
    - theming
    - globals
  - material-ui
- build pipelines
  - next (the app)
  - storybook (component lab)
  - typedoc (library documentation)
- testing
  - jest
  - enzyme
  - testing-library
  - storyshots
- dev tools
  - eslint
  - prettier
  - husky
  - lint-staged

## How to use

### Run locally

Install and run the development server:

```bash
yarn install
yarn start:watch
```

This also works if you have `now` configured:

```bash
now dev
```

### Deploy

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```
