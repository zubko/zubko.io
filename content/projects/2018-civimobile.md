---
path: '/projects/civimobile'
title: 'CiviMobile for iOS and Android'
tags: ['ios', 'android', 'react-native']
active: true
tech: ['React Native', 'Redux', 'Redux Saga']
---

Mobile app and app framework which is able to connect to different types of CiviCRM back ends to provide native mobile experience for the users of CiviCRM platform.

The architecture is divided to Core, Features and Apps sections:

* Core section provides a framework for the apps to be built by combining and configuring features.

* Features section uses Core to implement various business logic scenarios involving getting / storing / rendering and sending data to / from CiviCRM back end.

* App section provides a wireframe to assemble the app consisting of features configured with app specific configs.

The app is built with React Native so most of code is shared between iOS and Android and the entrance level for a new team member who knows only JavaScript/React to start adding real value to the app is quite low.

Notable React Native libs that were used: redux, redux-saga, react-native-navigation, react-native-calendars, react-native-maps, react-native-i18n, axios, react-native-firebase.

App Center was used to provide continuous integration. Every new code push to the master branch makes a fresh build for each app.
