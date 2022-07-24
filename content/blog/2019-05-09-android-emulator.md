---
date: "2019-05-09"
title: "Running Android emulator from the terminal"
path: "/blog/android-emulator"
tags: ["advice", "android", "react-native"]
---

Add to your `~/.bash_profile`:

```bash
alias emulator='cd $ANDROID_HOME/emulator && ./emulator -avd
Nexus_One_API_25 &'
```

---

While working on React Native most of work is done in VS Code / Terminal / Chrome and to start Android Studio and to click trough the UI just to start the emulator is a lengthy process.

And actually it is possible to run the emulator from the command line, because it's an executable in Android SDK folder!

So the first step is to locate that dir. On my machine it is `~/Library/Android/sdk`. And the emulator is inside the `emulator` folder. So to run the emulator it's possible to:

```bash
cd ~/Library/Android/sdk/emulator
./emulator -avd Nexus_One_API_25
```

`Nexus_One_API_25` here is the name of the virtual device, which can be looked up inside Android Studio or by running:

```bash
./emulator -list-avds
4inch_WVGA_Nexus_S_API_23
5.1_WVGA_API_24
7_WSVGA_Tablet_API_25
Nexus_5_API_28
Nexus_9_API_25_-_2048x1536
Nexus_One_API_25
```

And since it's a lengthy and often used command it's good to save an alias for quick access. For Bash this can be done in `~/.bash_profile`. (And as on iOS we have simulator rather than emulator, so the `emulator` word implies Android 🤓)

```bash
alias emulator='cd ~/Library/Android/sdk/emulator && ./emulator -avd Nexus_One_API_25'
```

This is a good start, but there certainly can be some improvements.

First one comes from the observation that while setting up Android SDK it's recommended to define `ANDROID_HOME` shell variable, so it can be used for portability and single source of truth.

Then more important improvement is needed to prevent the call to emulator to block the terminal. Terminal will wait the app to finish, but this will happen only when the emulator window will be closed. So to prevent the waiting the `&` is added to the end of the call.

So with both of this changes the alias will become:

```bash
alias emulator='cd $ANDROID_HOME/emulator && ./emulator -avd
Nexus_One_API_25 &'
```

There is a little glitch - when you try to close the tab of the Terminal app, the terminal will warn you that the processes of emulator will be closed. If that was true then `nohup` could be used to prevent the closing of emulator, but apparently the emulator app ignores the kill signal from the terminal, so the tab can be closed freely and the emulator will stay alive.

There is always a further space for improvement. For example it would be nice to have a selection of possible emulators from the list of available ones with the last used emulator selected by default, etc etc. But for now the current solution is enough.
