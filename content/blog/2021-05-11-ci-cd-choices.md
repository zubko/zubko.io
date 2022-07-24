---
date: "2021-05-11"
title: "CI/CD choices for mobile app development"
path: "/blog/ci-cd-choices"
tags: ["react-native", "android", "ios", "ci/cd", "fastlane"]
---

TL;DR Learn [Fastlane](https://fastlane.tools/) once and use it on any CI/CD of choice to organize the building, testing and delivering of your mobile app.

## Intro

Sooner or later the time will come when you will have to send your app to your clients, testers, friends etc. Each platform, iOS or Android, has some "built in" ways of generating the build assets and distributing them to others while you are still developing your app. And I guess everyone will follow the default way for a while until they realize that the situation can be greatly improved. Especially that the ecosystem around CI/CD in general is constantly improving every year and more companies include macOS VMs in the list of CI runners. These days there shouldn't be much of an excuse of not using the CI/CD.

The CI/CD solutions for mobile apps that I'm aware of I can divide into 2 categories:

- dedicated mobile CI/CDs (like [Bitrise](https://www.bitrise.io/), [App Center](https://appcenter.ms/) etc)
- general purpose CI/CDs (like [Jenkins](https://www.jenkins.io/), [CircleCI](https://circleci.com/), [GitHub Actions](https://github.com/features/actions) etc)

Also to make any CI/CD solution work for mobile app, we need to take care about the distribution of the build results, esp for iOS where users can't just download and install any binary file. Some dedicated mobile CI/CDs, like App Center, provide this functionality as well. Also a separate distribution service can be used, either provided by Apple/Google for their platform or 3rd party ones.

## Dedicated mobile CI/CDs

Dedicated mobile CI/CDs services can definitely attract developers by the smaller learning curve needed to setup building and testing in the cloud. Usually they provide pre-made build actions that will recognize the project and build it. If you are developing using only native SDKs and libraries or if you are using popular frameworks to develop for both iOS and Android (like React Native or Ionic) and your project structure or build tools don't deviate much from the default for each platform these services can do their job pretty well.

I've started my own CI/CD journey from this type of solutions as I was attracted by their ease of use. At first, doing a couple of clicks or dragging some boxes looked more attractive than getting into YAML syntax or writing my own build scripts. But eventually, I've seen that such approach has its own tradeoffs:

- _What if you need to move to another CI/CD service?_ For example we wanted to build a React Native app and test it with Detox on Bitrise and we found out that the build VMs were actually quite slow (compared to our machines), so the allowed build time on the service wasn't enough to build an iOS RN app and to run Detox tests on it and the higher tier of that CI/CD service was too expensive for that client. The knowledge of actions and boxes of one service doesn't necessarily apply to the other one. And you will need to recreate the same structure using the tools and the ways of another service.

- _What if you make some changes to the project that will make it incompatible with the pre-made build action of the CI/CD service?_ I've had such issue with App Center. I still don't know what particular change in the project caused that App Center's UI stopped recognizing the project thus blocking the way to reconfigure the build, most likely it was around parametrising the project files of iOS and Android to support building a number of similar apps from the same project files. The UI sometimes from 5th time opened the config and let to change the parameters and it's not a priority case for a big project, so there was not much information about investigation or fixing this strange issue. We just decided to move to a fully customizable CI/CD which would let us to run Fastlane there.

These days I will use such specialized mobile CI/CDs only if, for example, the person who will need to support this setup isn't very technical.

## General purpose CI/CDs

This is pretty clear. You get a system that can execute any actions triggered by some events (most likely Git push), and you can do whatever you want to do. As the mobile phone development is quite strong these days, most likely these CI/CDs will have some pre-made or community made actions / scripts which know how to build a general mobile app. But the support will be even more limited than in dedicated mobile CI/CDs.

With the general purpose CI/CDs we can start considering writing our own build scripts that we could run on any such CI/CD, it would definitely provide a necessary flexibility. And here comes Fastlane. [Some great developers](https://github.com/fastlane/fastlane/graphs/contributors) have already done a big chunk of work related to configuring and building the mobile app projects and they have made those scripts available as open-source.

## [Fastlane](https://fastlane.tools/) with ... ([your Mac](https://www.apple.com/mac/), [Jenkins](https://www.jenkins.io/), [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/), ...anythingThatCanExecuteRubyOnMac)

And yes, Fastlane in a way is "just" a family of scripts written in Ruby which can do quite a lot around building and publishing the app. (There is also some shell to organize running of those scripts using "lanes" and organize the nice CLI output, plus the support of plugins, so it's more elaborate than "just some scripts"). Of course, to be honest, I'd prefer the build scripts for React Native app to be written in JavaScript/TypeScript for Node.js. But the core developers of Fastlane probably knew well Ruby and Ruby on Rails and there is a certain Ruby ecosystem around tools for iOS projects, like for example CocoaPods is written in Ruby as well and there are some Ruby projects to help parsing and changing Xcode project files. So this choice makes sense. Also Ruby is quite a straightforward language and there is not much of starting Ruby knowledge required for the purposes of calling the right Fastlane command with some parameters.

The most challenging thing about working with Ruby for me so far was finding a convenient way to deal with versions of Ruby and to organize the usage of Gems which won't require super user access rights.

Eventually I settled down on using [rbenv](https://github.com/rbenv/rbenv) and [Bundler](https://bundler.io/). `rbenv` will allow me to choose the version of ruby and it will organize storing of gems in the home folder. Bundler will provide a way to make sure the gems versions match on different machines.

Fastlane is definitely a saviour when the need comes to automate the release steps for an app on a local machine. And its capabilities are very handy for building the app on a CI machine, which usually is a clean VM machine every time and you'll have to install all the iOS certificates and change some signing settings of the Xcode project.

At first you may start writing some simple lanes, like - run tests, manage signing, build, send. But comparing to some of CI/CDs which allow you to setup actions using YAML, writing a build script with Fastlane will allow you to use a fully featured programming language on steroids (the commands and plugins for different CI/CD specific needs). So it's very natural that the CI/CD scripts will become more elaborate with time - like you can generate the build number instead of manually increasing it, you can modify the bundle ID & the icon of the app to make it clear which is a 'staging' version, you can push debug artifacts to crash logging service of choice, you can tag the Git commit from which you're doing the release, etc etc.

And what is unbeatable about this solution, that for the development of these steps you will be using your own machine, and you can run/re-run, debug, run `irb` and investigate your idea until you get it all working together, and then you'll push it to Git and run on CI/CD, while for many CI/CDs (for example GitHub Actions) you'll have to push your changes to Git any time you want to try something, and then you'll wait, check the logs, make changes, push to Git again, which makes the development of CI/CD pipeline much slower (and I can understand why there is a [simulator for GitHub actions](https://github.com/nektos/act)).

Of course, you can do the same without Fastlane, just write your build scripts in Shell script, JavaScript or Kotlin, call `xcodebuild` for iOS, `./gradlew` for Android build, etc. Gradle files are also written in programming language, so you can add CI/CD tasks there, for example. And on the surface it may be simple. But you'll have to support 2 platforms and eventually the edge cases will start to pileup which developers and contributors of Fastlane have solved already. So I think writing your own scripts will be a more tedious path (although it could be pretty fun to do).

And with the variety of multipurpose CI/CD services out there, after having your Fastlane scripts ready, you'll be able to run them on any service which can provide you a macOS machine which can execute Ruby. So the number of options increases greatly and the cost of a switch to a different service also decreases very much. You can even mix and match different CI/CDs for different purposes if you wish.

## Distribution

As for the "delivery" part of CD, I've already mentioned that it can be a part of dedicated mobile CI/CD or it can be a separate service. I've used TestFlight in the past, before it was acquired by Apple, and it worked very well. As for the Apple's / Google's own beta delivery services, I think the big issue with them is that the app will be needed to be briefly checked by some kind of review team, so the beta version may not be available immediately after upload. And it's good that App Center allows to use the distribution part of their service independently from the build part, so these days I prefer to setup the distribution through App Center with any CI/CD that is doing the build. It's very nice that there is even a [Fastlane plugin](https://github.com/microsoft/fastlane-plugin-appcenter) for that from Microsoft.

## So ...

at the time of writing, for CI/CD of a mobile app most likely I will choose to:

- set / test Fastlane scripts on my machine
- use any general purpose CI/CD which can execute them
- distribute staging version with App Center
