---
date: '2016-01-01'
path: '/projects/clever-max'
title: 'Clever Max for iOS'
tags: ['iOS', 'native', 'Swift', 'SpriteKit']
active: false
tech: ['iOS', 'Swift', 'UIKit', 'SpriteKit', 'Realm', 'Live Reload']
---

Digital book for iPhone and iPad.

https://geo.itunes.apple.com/us/app/clever-max/id1080502511

The book shows the pages of the story with a slight animation on each page. Navigation can be done by swiping through pages or through the menu. In addition to the text the book plays a narration voice and highlights the word in the text which is pronounced currently. There is also a small game at the end of the story and some utility screens with the information and settings.

The app was written in Swift. It uses SpriteKit for the story pages and UIKit for the navigation and for the static pages. Also standard and custom UIKit controls were shown on top of SpriteKit scenes. Using of SpriteKit allowed to create the pages and their animations in a visual way using SpriteKit Scene Editor inside Xcode. The order of the pages and the settings for each page were configured in a Plist file. The images were stored inside the Asset Catalog, so with the new iOS 9 App Thinning the users download separate iPhone or iPad set of resources from the App Store. There is strong code and data separation inside the app. With the replacement of images, sounds, scenes, plist config file and static content inside the storyboard the whole new book can be made without any additional or with very small additional codding required. Realm library was used to provide a simple and reliable local storage functionality.

With an addition of a simple local HTTP server written in Python and a couple of lines of Swift code the development version of the app was able to load the scenes from the development machine without any need to restart the app thus enabling very short cycle of making a change in the Scene Editor and seeing the live result on the device after a couple of seconds.