---
date: '2019-07-19'
title: 'Feature oriented React Native app structure'
path: '/posts/feature-oriented-rn-app'
tags: ['architecture', 'react-native']
---

The modular app's architecture where the code is grouped by its features

## Code first

The example app which demonstrates the idea can be found here: https://github.com/zubko/rn-feature-oriented-app-architecture-example

The app looks like this:

![App demo](https://github.com/zubko/rn-feature-oriented-app-architecture-example/raw/master/docs/rn-feature-oriented-app-architecture-example.gif)

## Basic idea

The idea of the architecture is to separate the core of the application from its features. So in a way it's possible to see what the app can do by looking at the file structure of the app.

In the example app we have:

```
- `app`: // so this is some app, good start
  - `core`: // ok, it has some core (common functionality)
  - `features`: // alright, it can do smth, let's see what it is
    - `auth`: // so there is some authentication in the app
    - `dashboard`: // and there is some dashboard, cool
    - ...
    - `quiz`: // ok, so there is a quiz
    - `user`: // and there are users in the app
```

So it's possible to see from this structure that basically this is the app where users can authenticate and do some quizzes.

## Other benefits

Compared to splitting only by the module type (`Components`/`Screens`/`Routes`/`Actions` etc in the root folder) this way has:

- better code discoverability - it's easier to locate things, what is located where;
- better encapsulation - no need for other modules to know too much about each other or too easily include code from each other, no need for the code which is used only for one feature to pile in the common place;
- better testability - the more separate the components are, the easier to test them independently from each other;
- easier to work for a team - different people can work on different features without interfering much with each other's work;
- better reusability, the core can be reused for other apps, also features can be detached more or less freely, considering that the core will stay the same or similar;

## Interface

Each feature has a common interface by which it shares itself with the rest of the app:

- `key` - a unique key by which it will be identified (only 1 required export)
- `screens` - an object of name->screen to share the screens (if there are any)
- `redux` - action types / feature's reducer / action creators (Redux stuff)
- `createSagas` - a function to initialize sagas of the feature (for the logic)

Inside its folder a feature can have its own components, screens, routes, etc. It's structure can depend on requirements and complexity of the feature. If some components or utils are useful for the rest of the app they can be moved to the core. When one feature needs data or behavior of another one it can get it through redux or saga interfaces. Importing of files directly from feature to feature is possible by means of the language but it's discouraged by the architecture.

## Tech stack

It's easy to notice that using of Redux / Redux Saga is leaking in the number of places. In a more complex implementation a feature could use any state management / logic runner and it could provide some of its data / behavior on a request through some common interface. This is a tradeoff of having less complexity vs. having a cleaner solution.

On the other side Redux and Redux Saga are battle tested and wide adopted libraries (esp. Redux). Existing open-source developer tools allow easy inspection of the redux state and logging of actions, which can be really useful in development.

Any other choices, like persisting data with RN's AsyncStorage or using Axios for REST requests, can be different for different feature. For example for some more data heavy case a feature can talk with a native storage provider (like SQLite) through saga and bring the needed data to redux store which will be rendered on UI.

The navigation library of choice is React Navigation for its simplicity of integration and because its features are completely enough for the purposes of the example. This choice is hidden behind the `Navigation` service, but some parts are leaking, like configuring the navigation through static props of the screen component. Ideally it would be also abstracted to be able to change and experiment with the navigation libraries.

## Outcome

As we all know the complexity of the code grows with the time of the app being in development. This particular structure will be an overkill for a simple 1-3 page app or prototype. But for an app which is expected to grow with a new and new features added to it, this structure provides quite an accessible way to ballance the growing complexity.