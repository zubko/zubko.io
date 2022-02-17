---
date: '2018-01-01'
path: '/work/civimobile'
title: 'CiviMobile for iOS and Android'
tags: ['iOS', 'Android', 'React Native']
active: false
tech: ['React Native', 'Redux', 'Redux Saga']
---

Mobile apps and app framework which is able to connect to different types of CiviCRM back ends. Provides native mobile experience for the users of CiviCRM platform.

* https://apple.co/2DmNWWH

* https://apple.co/2Q1fJ0j

* https://bit.ly/2xAiFtM

* https://bit.ly/2PSV3Hu

The architecture is divided to Core, Features and Apps sections:

* Core section provides a framework for the apps to be built by combining and configuring features. For example some of core features are navigation, i18n, config, theme, React components, assets, network api, store etc.

* Features section uses Core to implement various business logic scenarios involving getting / storing / rendering and sending data to / from CiviCRM back end.

* App section provides a wireframe to assemble the app consisting of features configured with app specific configs.

The customization of features for the apps can be made by changing the values stored in config. Any config key of the feature can be overridden from the config of the App. For example, an app can define a list of properties to be asked from the back end REST api and an order of them to be rendered on the details screen.

The app is built with React Native so most of code is shared between iOS and Android and the entrance level for a new team member who knows only JavaScript/React to start adding real value to the app is quite low.

Notable React Native libs that were used: `redux`, `redux-saga`, `react-native-navigation`, `react-native-calendars`, `react-native-maps`, `react-native-i18n`, `axios`, `react-native-firebase`.

App Center was used to provide continuous integration. Every new code push to the master branch makes a fresh build for each app.
