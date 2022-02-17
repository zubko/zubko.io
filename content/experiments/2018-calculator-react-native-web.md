---
date: '2019-01-01'
path: '/experiments/calculator-rn-web'
title: 'Calculator with RN for Web @ FreeCodeCamp'
tags: ['react-native', 'react-native-web', 'web', 'react', 'functional programming']
active: false
tech: ['React Native for Web', 'React', 'Ramda', 'math.js', 'FP']
---

A simple calculator Web app with FP logic core and React Native for Web UI.

[Open in CodeSandbox](https://codesandbox.io/s/calculator-with-react-native-for-web-dwcnz)

Calculator was one of the Web development projects at FreeCodeCamp. I was strongly influenced by the ideas of functional programming from SICP book / course. Also I wanted to experiment with the idea that the logic of the app should not depend on a particular platform or View layer library. I've chosen to try React Native for Web but I wanted to logic to be independent from that decision.

Visually and feature-wise I liked the design and the features of the calculator by Google and wanted to make something similar.

There were no particular constraints on how to solve the task apart of that it should be a React Web app, so for the calculation itself I decided to use [math.js](https://mathjs.org) which looked pretty strong esp. with the ability to parse a string with math expression. The only part that was left for the logic was to provide means for the user to construct this string safely without allowing the options which doesn't make sense as a math expression (like using 2 math operators one after another for example).

I also like the idea to provide a config to make certain things very obvious and very easily changeable. For example in this app there was a config to set the buttons layout with the labels and the styles of the button to use. As the config is also in JavaScript, another option could be just putting the React Components in a JSX structure directly with their styles and labels. But with the config the button layout became super obvious and also it allowed to group together some other settings for the button or for the operation that it represents.

It's interesting that it was before React Hooks were introduced.This separate logic entity could be considered more or less as a movement in that direction. With React Hooks this logic can provide an additional hook interface to be consumed by React Component.
