---
type: 'book'
author: 'Kevlin Henney .. & Experts'
title: '97 Things Every Programmer Should Know'
year: '2010'
tags: ['general', 'programming']
active: false
---

This is a list of various advices about different general things in programming. Every one of them comes from some general common sense or it was gained from the experience of the author. Almost all of them are generally agreeable pieces of programming wisdom. These advices are touching quite different areas, so some additional "homework" is needed to group the related ones and place them to the appropriate shelves in the mind to be able to retain them. But it's good that they come together in a form of a book which can be easily revisited (comparing to separate articles on different blogs). It's interesting that we as developers have quite a lot of different areas and points to be aware of, and if we leave out one important focus, like testing, learning or tools, it will make a big hit on our general professional progress and ability to produce systems which target more complex problems and / or provide a higher quality level of the solution. I think it's also good to revisit this book from time to time, just to quickly look through and recheck the advices after the upgraded level of experience from work.

A couple of things that I've particularly liked:

> Code in the Language of the Domain by Dan North

This is a very important one to achieve a high level of code readability and productivity in changing the logic. If we operate all the time in the "assembly" language of our general purpose programming language the reader of the code (or eventually we) will have to dive into the details all the time to understand what is happening in the piece of logic. It's much more readable and easier to make a change when you reason in the particular domain of the problem itself.

> Do Lots of Deliberate Practice by Jon Jagger

I really want to start to do some programming just for the fun of it, like I did in the childhood. I agree that by doing that my general level of productivity and quality will increase. One of the issues for me here is the rapid pace of the changes in the Mobile and Web development and my curiosity about new things, so most of my out of work programming I dedicate to learning some new things, rather than to practice something that I'm already doing at my work for example. I have to think about adding this activity as well.

> Encapsulate Behavior, Not Just State by Einar Landre

This one is also good to mention. It talks about encapsulation in OOP. But I like to think about it broader. We are always encapsulating something in something, and sometimes it's some data or some state, sometimes it is some behavior, but it may be useful consider encapsulating both state and behavior for some cases to have a more self sufficient module that can be used with other modules.

> Know Your Next Commit by Dan Bergh Johnsson

This advice is pretty good in general, because with the growing complexity of the apps it's easy to get stretched too thin while working on some new feature. It's always good to keep focus on the exact step that is happening now and to keep a plan and a list of TODOs for the incoming spotted things here and there to address them one by one in "Know Your Next Commit" fashion.

> Read Code by Karianne Berg

This one I'm following almost on a daily basis. I found it amusing and useful to read the code of some famous libraries on GitHub, it's such a blessing actually that in modern days the code is so easily to reach. Also sometimes it's very surprising actually how some of the famous libraries are implemented and checking the source code of a library can really help with a decision to use it or not.

> Reinvent the Wheel Often by Jason P. Sage

I think this one should go with the deliberate practice. One of the points of application of "deliberate practice" can be towards making an implementation of some important tool or concept for the sake of education, practice and to understand it better.

> Testing Is the Engineering Rigor of Software Development by Neal Ford

There can't be sad too much about testing. It's such an important concept. The most of modern software developers are really lucky that we can just replace / redeploy the new code as soon as we fix it (especially on Web), but even with this convenience if the user will be the first to discover the issue that should be treated as a worst case scenario and we should do as much as possible to not allow the issue to go to production.

[(Book's page)](https://www.oreilly.com/library/view/97-things-every/9780596809515/)
