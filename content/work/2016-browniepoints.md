---
date: "2016-01-01"
path: "/work/browniepoints"
title: "BrowniePoints for iOS"
tags: ["iOS", "Objective-C", "Swift"]
active: false
tech: ["Objective-C", "Core Data", "Core Animation", "ASIHTTPRequest", "Ruby"]
---

iOS app for the children to practice math and to earn real App Store games as rewards.

https://youtu.be/wKwxzpagNo0

iOS app provided an access to the quiz process, profile management, the list of rewards, and the review of the child's performance.

**Responsibilities:** I worked on the application with the product owner from the very start of the project. I helped to choose the technology and also estimated time to implement various features when it was requested. I worked on architecture then implemented the app from the mocks with a great care to provide a pixel perfect UI, good performance and smooth user experience. I led the small team consisting of one more developer during the peek development periods. After initial release on App Store I maintained the app, implemented new features, refactored and changed the app's behavior based on the analysis of user data. During course of the development I tried to be aware of other areas of the project, giving my feedback and ideas about UI/UX, and app features. The initial version came to the store in about 6 months, and totally the app was in development for about 2 years. Unfortunately, when the right payment model was found and the app gained a rapid growth, Apple review team decided that the app violates some of the guidelines and they removed the app from the store. During the lifetime of the app the App Store rating was always ≥ 4.5⭐️.

**Technology:** The application was built using various native libraries. Also we used a number of 3rd party open-source libraries to speed up the development. The main development language was Objective-C. The app communicated with the back-end over JSON REST API. Some improvements were made to make it possible to do a number of requests in one batch, also where it was possible we used optimistic requests. We minimized the number of times when network communication was needed and added background downloading of questions and background uploading of quiz results to provide a very smooth UX during quiz. The data from the server was cached in Core Data local storage. There was a generation utility which pre-populated the Core Data store, so on the first launch the app started having already some data and images of the rewards. The app had various custom controls with additional styling possibilities and with more enhanced features comparing to the standard ones. For example, custom buttons automatically make the minimum tap area equal to 44 points (a minimum recommended tap area by Apple HIG). Custom text fields were enhanced with text validation and error displaying features, etc. Also we used elements which are more common for games - particle effects, richer animations, sounds and video playback to provide more playful experience for the kids. Some animations, particle effects and custom controls required the usage of Core Animation. During the process of development I also created various helping build scripts and utility scripts. For example a script for auto generating acknowledgements and licenses of 3rd party libraries by combining license readme files in the directory structure of the libraries (before this feature became available in CocoaPods). We had a script for easier export of 1x and 2x graphics from Fireworks mockup and a script for checking unused images in the project. Ruby and JavaScript were used for scripting.
