# Short

The source code of my personal [website / blog / portfolio / playground](https://zubko.io/) built with [Gatsby](https://www.gatsbyjs.org) hosted on [Netlify](https://www.netlify.com/)

---

# Intro

The idea of the website is to:
- have a personal playground for Web/React
- to have a place where I keep track of what I've done and what I'm doing
- to share experience that I get while developing something

# What libraries were used so far:

- [Gatsby](https://www.gatsbyjs.org/) (and some plugins)
- Gatsby means - [React](https://reactjs.org/) + [GraphQL](https://graphql.org/) + SSR (behind the curtains)
- [Emotion](https://emotion.sh)
- [Flow](https://flow.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)

# Structure

More or less default structure for a Gatsby website is used so far.
There are some `components`, some `pages`, some `templates` - all of them are React components used for various purposes.

Gatsby specific code is either in the root folder or inside `gatsby` folder. Eventually all Gatsby specific code should be inside that folder.

# Scripts

`yarn install` to get dependencies

`yarn develop` to run development version

`yarn serve` to build and run production version

`yarn test` to run unit tests
