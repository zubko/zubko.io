---
date: "2017-01-01"
path: "/work/pregnancy-ios"
title: "Pregnancy week by week for iOS"
tags: ["iOS", "Objective-C", "React Native"]
active: false
tech: ["React Native", "Redux", "Material UI"]
---

iOS React Native version of the app to show various information and provide tools useful during pregnancy

I made an iOS version of already existing Android version. The app was made using React Native to make it possible to join two platforms together in the future. Later the app's owners decided to concentrate only on the marketing. And later they decided to remake the app using Swift. At the moment of removing the app from the store the app got 3188 ratings with 4.8⭐️ average.

**Technology:** The application was built using React Native, react-navigation, Redux and some UI libraries. The static data was loaded from JSONs, which were converted during build time from the XML data files from Android version of the app. There was also a script to generate the assets JS file from the files in the assets folder, so in the app it was possible to procedurally make a file name and to check if the image exists. Some parts were made from the Objective-C side, the app's owners had high requirements for the performance of the app, so at times when it wasn't possible to achieve the level of performance with the React Native, the native code was written and used from the React Native side. Using React Native helped to make the app's responsive screens with complex layouts in the shorter time comparing to using the native iOS auto layout. Also auto and hot reloading of the app helped to tune the design and to achieve the level of polish that was required by the app's owner.
