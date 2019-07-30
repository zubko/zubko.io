---
type: course
author: Micah Martin, Robert "Uncle Bob" Martin
title: Clean Coders - Java Case Study (screencast)
active: false
---

This was a screencast. Although it was possible of course to follow along with writing code in parallel. I've chosen not to write the code, because of the time considerations. But I've tried [Finesse](http://docs.fitnesse.org/FrontPage) with a plugin for Node.js / JavaScript and I've made a couple of acceptance tests passing just for fun. And I added to my plans to remake one of my React Native demo apps in a similar manner inspired by the approach on the screencast. In the general the best take away from this screencast for me is to see it live on a real case how the SOLID architecture can be implemented and that some struggling, experimentation and refactoring is a part of the process.

[(More info about the screencast)](https://cleancoders.com/video-details/java-case-study-episode-1)

Some thoughts from it which jumped into my notes:

* Which programmer will move faster? The one who jumps in and who is rapidly typing code while screaming and being irritated, or the one who deliberately inspects the system and makes the changes here and there where they are needed while still understanding that the deadlines are needed to be hit? Which type of personality would you prefer as a heart surgeon?

* It was nice to see a real usage of the [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique).

* It was nice to see writing and using acceptance tests in action. They can really provide additional value of making us confident that the app is working as it should which especially helps in refactoring.

* It's better not to use real world names for unit tests, it doesn't seem professional, user should be 'user', codecast - 'codecast' etc, but it's better to use real world names when showing some demos to customers, because they will think that a placeholder is an error.

* Pre-factoring usually isn't a good thing. It's better to see on the real case how the system is needed to be structured.

* Be careful putting TODOs here and there in the code. It's easy to start having tons of TODOs that no-one wants to take.

* So we can create a part of the app with unit tests and acceptance tests, kind of shooting a bullet deep into the system to see different layers and then we can improve the structure and the architecture, while still keeping the tests passing.

* Sometimes tests aren't failing when they should, so for a new test check if it is actually failing.

* Discipline is important, especially when there is a tight schedule. It's important to stick to the discipline as the only constant factor.

* Sometimes it's good to intentionally slow yourself down, esp when working on a complex task, slow and easy :)

* Make it work > Make it right > Make it fast > Make it small

* Brief architecture of their solution - Router activates Controller based on Request, Controller talks to UseCase with RequestModel over InputBoundary, UseCase gives back ResponseModel over OutputBoundary, Controller passes ResponseModel to Presenter, Presenter generates ViewModel, Controller takes ViewModel and passes it to the View. The DB is hidden behind the Gateway interfaces. For the tests the in memory store is used. The currently logged user is provided by Gatekeeper. The singleton Context class is used to access the Gateway and the Gatekeeper. (It's better to see as a chart)

* Using unit test code coverage tools can help to see what areas of the app are missing tests.

* When the view code is simple, for example one to one coping of values and setting some CSS, the code can be tested by looking at the result, rather than by writing some complex test which code inspects HTML.

Of course there are more gems inside.
