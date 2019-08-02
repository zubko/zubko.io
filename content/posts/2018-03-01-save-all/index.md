---
date: '2018-03-01'
title: 'Save all edited files with ⌘-S'
path: '/posts/save-all'
tags: ['tiny', 'advice']
---

In your code editor try to set ⌘-S (CTRL-S) to `Save All` instead of a regular `Save`.

I've picked up this little thing when I was working on a native Android app. Android Studio had this setting by default. But when I got used to it and set it in VS Code, this little thing improved my daily React Native workflow. Previously I had a habit of automatically saving current file after every significant change to not loose the new changes. But in RN every save will trigger live or hot reloading and it may trigger an error. For example if a child component is calling some required handler from its props which isn't defined yet in the parent component. Then after fixing the error most often the bundle on active test devices and simulators has to be reloaded manually. If I have a simple shortcut to save all files then it nice to make the changes to all files which are involved and then to hit ⌘-S to check the result. Not a huge productivity boost, but it's definitely nice to have it.

As for the native iOS development this is not very useful. Xcode saves all files before compiling the project. So one ⌘-R shortcut is enough to save all files and run the app to test the changes.
