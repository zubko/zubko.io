---
date: '2019-01-01'
path: '/projects/couldbeus'
title: 'CouldBeUs for Android and iOS'
tags: ['iOS', 'Android', 'React Native']
active: false
tech: ['iOS', 'Android', 'React Native', 'Firebase', 'Redux', 'Redux Saga', 'App Center']
---

Fixed and improved React Native MVP of a dating mobile application

I started working on an app which was developed for a while by different developers before me. I needed to fix some bugs and organize the code at first and then to add new functionality and to prepare the app for the alpha testing.

I transitioned the project lightly to using of TypeScript for a better type safety, converted from Expo Managed to Expo Bare type of the app, because new features required In-App Purchases for example, and configured CI builds through App Center.

I introduced the support of using different environments and splitting different constants like API keys based on the environment, so it was more easy to develop and test the app by different people. When we had other developers on the project it was helpful that the app was able to connect to different development Firebase instances by an easy switch. And we needed to have a new separate instance for the Alpha testing. There was a script to select the current environment for the app and the constants were available from the native side and from the JS.

I worked on the new features from the React Native side and on the Firebase when it was needed. Some features required the usage of cloud functions written in JS. And I've set up sharing of the Model layer of the code between the React Native and the Firebase.

 One of the challenging tasks from a React Native side was to add a 3D rotation effect to the feed of users (similar to the effect in the Instagram stories). I've used the `react-native-reanimated` library to make a swiping animation using `react-native-gesture-handler` events, and changed the `transform` style property of the card during the animation to add the 3D rotation during the gesture.

On the Firebase side one among of the more interesting tasks was to generate images of the tag cloud using Firebase Cloud Functions and to store them in the Firebase Cloud Storage to be loaded and shown in the application.

I've participated on the project until the Alpha testing of the app and a little further to support the transition of the development to one agency that the owners found.
