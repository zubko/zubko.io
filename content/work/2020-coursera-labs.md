---
date: "2020-01-01"
path: "/work/coursera-bulgaria"
title: "Coursera Labs Web App"
tags: ["React"]
active: false
tech: ["React", "TypeScript", "Redux", "Redux Thunk", "SCSS"]
---

Worked on applying new UI, adding support of WCAG accessibility standard and new frontend features for the new interactive part of Coursera platform known as Coursera Labs

For almost a year I was a part of Coursera Bulgaria team. This was my first commercial React Web development, but I had a solid knowledge of React from doing React Native development and my knowledge of CSS and DOM API were good enough to be productive with implementing new features and fixing the old issues of the Web app.

My main focus was implementing the accessibility requirements listed by [WCAG v2.1 standard](https://www.w3.org/TR/WCAG21/). I analyzed the standard and worked with designers to help them understand what was required from them in order to support accessibility. As about half of the points were depending on the design we decided to apply the new design to the Web app and I was actively involved in the redesign.

During the redesign work I also took part in some research, implementing the features of the parts of the web app targeted at instructors or learners and actively participated in code reviews, discussions, refactoring of the existing codebase and improving the developer experience.

We switched from plain CSS to using SCSS, because it allowed a seamless upgrade of the current style system to be able to use shared theme, mixins etc (the supported browser versions at that time didn't allow using CSS vars), and we put a big focus on optimizing the usage of Redux to prevent unnecessary full-page re-renders and to move business logic to Redux reducers and middlewares to keep React components to be responsible only for the presentation and the user input.

For example I was working on the feature which required using of a Redux middleware to track the time that user spends in the app and to show some alerts which will lead to network calls to the backend of the app which will in turn lead to showing more alerts. The existing system of showing the modal alerts to the user was not convenient for the developers, it required creating separate React components for the alerts and splitting the business logic across the files. I introduced a simple system of in-app alerts and the API was organized as an async redux actions (a feature of `redux-thunk`), and we had already a system of async redux actions for the backend API calls, so the whole business logic of showing alerts and making network calls could be grouped together and sequenced in a synchronous fashion by using `async/await` feature of modern JS/TS.

An example of accessibility feature could be making sure that all the functionality of the app is accessible by using keyboard only. And that it's in sync with what is available from the mouse. So, for example, if some part of the UI is covered by an overlay and is not available for the mouse clicks, it should not be available for focusing with the Tab key as well. To deal with this situation in a convenient way I introduced a system of UI contexts (implemented as React Context), which could be nested into each other and which wrap some region of the UI on the screen, and the UI components of the Web app were aware of those contexts, so by disabling the UI context of that region the whole UI of that region could become disabled and not accessible in any way by keyboard or mouse. (There are some improvements in the future Web standard to deal with this situation with `tabIndex` attribute, that it's not possible to disable the child element from the parent element, but currently this situation requires some special care).

It was also a great experience of being in a team with very smart people. Learning, sharing, discussing and prioritizing on the changes that could improve the code or the product objectively were the part of a day to day development.
