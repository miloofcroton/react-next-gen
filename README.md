# React: The Next(js) Generation

[![Build Status](https://travis-ci.org/miloofcroton/react-next-gen.svg?branch=master)](https://travis-ci.org/miloofcroton/react-next-gen)

## About

Welcome. This is a starter for React development. It is super flexible in terms of rendering strategy and deployment strategy, and it does a ton of great optimizations for you, so it's a great starting point for any new project.

## Table of contents

<!--ts-->
  - [About](#About)
  - [Table of contents](#Table-of-contents)
  - [Ideas](#Ideas)
    - [Why Next.js?](#why-Next.js?)
    - [What about the rest of the stack?](#What-about-the-rest-of-the-stack?)
  - [Development](#Development)
  - [Project Organization](#Project-Organization)
  - [Issues](#Issues)
  - [Goals](#Goals)
<!--te-->

## Ideas

### Why Next.js?

For those not familiar, Next.js is many things. I think it is simplest to call it a build tool, as you can also build your React project with create-react-app, Gatsby, or custom-made Webpack and Babel. The problem with writing those configs yourself, from scratch, is optimization is hard, annoying, and a tech debt that must continually paid to receive upstream updates. CRA (create-react-app) is 'good defaults'. Gatsby is 'great defaults' and a great plugin community, albeit with some limitations/opinions. Next is both more opinionated *and* more hands off than CRA, and I find this mix ideal. I've come to love the file system routing, and I like the ability to easily and cleanly bring my own Babel and Webpack config modifications. It doesn't have the template community of Gatsby, but pretty templates are far more great advertising than they are truly useful to a developer.

To get a bit more technical, Next can statically build your site and have the client receive it and then hydrate it into a full PWA. Gatsby does this too. Right from the start, you should have excellent Lighthouse scores because you don't need to write a ton of Webpack and Babel.

So, that is what Next can do as a build tool. What else can it do? Well, it can render pages on the server and deliver these pages as clients request them, much like Django, Ruby on Rails and a host of other web frameworks circa '05 - '15. This is valuable if you run a huge site so that either it is too expensive/painful to continually rebuild your site statically, or it is time sensitive, and you want back end changes to be seen immediately on the client (without relying upon client-side rendering). Alternatively, it's simply great if you find that the processing power and/or internet connection of your users means that client-side rendering is a bad strategy (but you still want to use React because... why wouldn't you).

That's not all, folks! Say you have a big site and you want to split it up into micro frontends. Next.js makes this trivial to do. You can enable `zones`, which will export every subdirectory under `/pages` into its own separate app for serving. You would just need a proxy to direct between them. This means you can build it as a monolith and then opt-in whenever you are ready with essentially no other changes of your own. Additionally, due to the file system routing, it is absolutely trivial to separate one Next app repo into two or more. This approach would really lend itself to taking a monolith and going to using `lerna` packages.

You can also target React Native and Electron with your Next.js app. In other words, you can build for any platform.

### What about the rest of the stack?

In bulleted form, I'm going to quickly mention each main tech choice.

##### Components

Tech:
  - react

Of note, I make heavy use of hooks. They let you use exactly what you need out of a rendering lifecycle (no more, no less). They are user-creatable. They let you place side effect logic in separate folders when complexity or abstraction calls for it. They allow components to be functional and more testable.

Are they a cure-all? Of course not, but functional components + hooks are definitely an improvement to config objects (called by createElement or createClass) and ES6 class components, in my opinion.

##### Styling

Tech:
  - emotion
    - css prop
    - theming
    - globals
  - material-ui
  - fontawesome

I'm a big believer in CSS-in-JS. Why?

CSS modules are cool. They're nice and clean. As a project grows, you want to find ways to not repeat yourself. What do you do? Give an object multiple classes, give multiple classes the same objects, cover specific cases (last child, when x is a child of y, etc). You end up mentioning the same class in several places in the same file. Eventually, you give up and just try to overwrite values to make the style correct on the page. Now, you don't know which CSS code is being used and which isn't. The more you manage this library, the longer you spend just writing the selector before you get to style the actual element.

Something else I learned recently: CSS-in-JS is easy to optimize for SSR!

I added Material UI in here because I wanted a complete component library to have access to. I don't like how bland and outdated it is, but it's a well-maintained library with huge popularity. For rapid development, I might just use it. I actually wanted to use Ant Design more, but they don't bundle CSS with their components, and I wasn't about to make my babel more complicated just so that I could use that lib.

I added Font Awesome because it's a ubiquitous icon library. I didn't want to get stuck with Material by using Material icons.

##### Data

Tech:
  - store
    - redux
      - middleware
        - thunk
        - promise
        - logger
  - requests
    - isomorphic-unfetch

One discussion with redux: case/switch vs object lookup. I'm an object lookup proponent because you get to use the scope of the function that gets called. It's more flexible for that and other reasons. Performance wise, I think a reducer with 7-10 actions becomes more efficient by object lookup than case/switch.

I use thunk middleware to chain actions from within a single outward-facing action call. I use promise middleware to do the loading/success/fail states for me. I am mixed on which one is better, so I still use both. I like async/await + try/catch for my request cycle when using thunks; seems much cleaner than using `.then` with promise return values. Much less punctuation.

Isomorphic-unfetch is a tiny library (unlike Axios), and it's actively maintained (unlike isomorphic-fetch).

##### Content

Tech:
  - mdx-js

Content is an underrated consideration for developers. You can optimize your bundles a ton if you are using images (Gatsby is great at this). For text content, you want to avoid writing stuff in html in components, yet many people do this. A big project will have a CMS, but for small stuff, it's just great to have a markdown pipeline.

##### Utilities

Tech:
  - lodash
  - moment

I hate relying on Lodash, as ES array methods are super clean and ubiquitous. Lodash does have some optimizations, but it is overflexible in my experience. I'd love a very type-safe utility library. Haven't tried Rambda yet, but I've heard it's not much better in TypeScript land.

Moment is definitely the best datetime lib in my experience.

##### Build pipelines

Tech:
  - next (the app)
  - storybook (component lab)
  - typedoc (library documentation)

Next is talked about in detail above.

Storybook is great for a sandboxed environment while developing components. On a large enough team, it becomes a necessity. It can also be great for writing tests and documentation if you publish a component library.

Typedoc is a documentation tool that documents a library at a functional level (types, interfaces, exported functions). It would be ideal for a project like lodash and probably of less use for a pure component library. For a functional css library? Maybe somewhere in the middle. I'm uncertain exactly how useful it is, but it's trying to solve a problem that I would like to stay on top of (documentation, particularly the automation of).

##### Testing

Tech:
  - jest
  - enzyme
  - testing-library
  - storyshots

Testing is important, but pure TDD is way too slow for where I'm at with this project. For a small project or a slower moving one, I'd be much more TDD. Also, often more useful for API development. I'm relying on regression tests, which I still mostly have to write too.

In the future, I will expand on my testing work in this starter.

##### Dev Tools

Tech:
  - eslint
  - prettier
  - husky
  - lint-staged

Good ESLint and Prettier configs are so important! It doesn't matter if you are working alone or in a huge company.

Husky and lint-staged just enforce extra linting, although you could use those hooks for other things too.

## Development

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

## Project Organization

The main directories (all in `/src`):

- `pages`
  - Anything in here is served by Next.js. It's that simple, stupid.
- `services`
  - Each of these is divided into components and data. These are conceptually apps that have no relation to each other, although it's sometimes more complicated than that. Isolation should make things cleaner.
- `lib`
  - This is just a huge service that any of the services can use.
- `store`
  - This is a way to collect data services at the root of `/src`, much like `pages` essentially collects components. Is it that simple? Not quiiite, but this is again a good wawy to keep things isolated.
- `style`
  - This is where you would set up theming and global styles. Would a layout component fit better here or under lib? I say here because it's specific to this project, whereas `lib` I tend to think of something as more general. You're also putting in content like the head and header, which fit better at a root level of `/src`.

Key config files to know for Next.js:

- `next.config.js`: this is where Webpack is modified and Next.js plugins and configs are inserted.
- `.babelrc`: we start with the Next presets and occasionally have to add plugins here.
- `_document`, `_app`, `_error`: these are in the `pages` directory. You can sort of think of them as analogous to the typical `app` and `index` files in the typical React app structure. `_document` is rendered on the server, and `_app` is rendered on the client, although I might be oversimplifying that. `_error` is the standard error page.

Redux organization:
- `actions`, `reducers`, and `selectors` files next to each other for a particular resource keep things very small and clean. Want to see what your actions might do to your resource's state? It's the next file over. This principle I think is called domain-driven design, where you organize by the domain first and the tech second. It's also similar to the Ducks pattern for redux, except I separate them into different files to prevent infinite loops where files might depend on each other (this is an edge case, but there's nothing with several files when things are organized).

## Issues

- Do I want to add `emotion-server` to prevent page flashes of style? Make sure I don't have style loading issues down the road...
- mdx linting is broken woooo (https://github.com/typescript-eslint/typescript-eslint/issues/1123)


## Goals

I want to flesh out what I'm doing with all that redux middleware. I might also do a version of this project with Apollo, and I might add a GraphQL/Express API too, but that is more on the backburner right at this moment.
