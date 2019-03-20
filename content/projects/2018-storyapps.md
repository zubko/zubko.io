---
date: '2019-01-01'
path: '/projects/storyapps'
title: 'StoryApps for Android and iOS'
tags: ['iOS', 'Android', 'React Native']
active: false
tech: ['iOS', 'Android', 'React Native', 'MobX', 'In-App Editor', 'App Center']
---

Two digital book apps made by similar technology. React Native helped to release for both Android and iOS.

The book shows the pages of the story. Navigation can be done by swiping through pages or through the menu. In addition to the text the book plays a narration voice and highlights the word in the text which is pronounced currently. There is also a small game at the end of the story and some utility screens with the information and settings.

The apps were made using React Native to be able to release for both Android and iOS from one codebase. On iOS UIPageController was used from the native side to provide a polished page turn animation. On Android a simple navigation was used. MobX was chosen for its 'magic' to provide a store and React integration with a minimum code. Each different kind of screen was represented by a React component (for ex: `Page`, `Menu`, `Game`, `Ending`) and each screen could receive a JSON config with some settings for the particular instance. The order of screens in the app was defined by the chain of JSONs: `['logo.json', 'menu.json', 'page-1.json', 'page-2.json']` etc. This chain of screens was defined in the main config file of the app.

Each config JSON could be changed from within the app. An editor could be displayed over the screen component. The editor simply rendered the contents of config JSON and provided a way to change it depending on the type of the parameter. When some parameter was changed the app sent a request to (a bit customized) RN packager to save the changes to the disk. The visual parameters could be tweaked in the app simply by tapping app/down buttons.
