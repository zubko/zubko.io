---
date: '2021-04-07'
title: 'Tip: Logging from the native code to the JS side'
path: '/blog/rn-log-from-native-code'
tags: ['react-native', 'android', 'ios']
---

When working on a native module for React Native app, sometimes it's necessary to log something from the native side and make it visible on the JS side.

A small investigation into the source code was needed to discover if and how it's possible.

On Android 🤖 there is a `RNLog` class with different methods. To show the warning which will be visible on the screen in DEV mode you can use `RNLog.w(reactContext, message)`.

On iOS 🍏 there is a `RCTLog...` family of functions and calling `RCTLogWarn(message)` will lead to showing the yellow message. (The `#import <React/RCTLog.h>` will be needed).

iOS version is more convenient since you can call it from anywhere, but Android version is more architecturally clean by not utilizing the global scope.

If you are working on a complex native module or an app with a complex architecture where JS developers pull already compiled and bundled native code (like [Expo](https://expo.io/) or the [apps of Wix](https://medium.com/wix-engineering/react-native-at-wix-the-architecture-db6361764da6)) you can send some greetings to yourself or your fellow JS developers.

Of course, the names may change in the future. At the moment of writing the latest version of RN is 0.64.
