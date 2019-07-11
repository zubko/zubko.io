---
date: '2019-06-25'
title: 'How to improve local imports in React Native'
path: '/posts/rn-improve-imports'
tags: ['advice', 'react-native', 'npm', 'metro']
---

Preventing those unmaintainable ../../.. in the imports.

Relative imports is a useful feature of any programming language. But at the same time when including something from "very far" it's good to be able to use some sort of an absolute import. Otherwise maintaining the whole structure during refactors can be time consuming and error prone and it's also just an ugly looking thing.

With the current JavaScript absolute imports are reserved for using the code from an NPM package. But what to do if we want to have some sort of an absolute import for the code inside the app?

### Our options

So far I know 3 possibilities for that:

<div id="option-one"></div>

1. Add extra `package.json` files to the main folders. This is kind of an old school way. It works because of some custom resolution logic in the metro bundler. But this method is definitely unknown to VSCode / ESlint / Flow etc. So the tools will freak out on the imports.

<div id="option-two"></div>

2. Use [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver). This is more or less popular way to do it currently. And there are workarounds for VSCode / ESLint / Flow to support this. But I don't like that each tool is needed to be configured / tweaked separately because of this, I'd rather stick to the method which has a 1 time setup and then everything just works.

<div id="option-three"></div>

3. Make a symlink to the code inside `node_modules` folder. This emulates loading our code as is if it came from an npm package, which is a standard way for absolute imports, so all tools which can work with packages (and symlinks) will work with this setup seamlessly. So this is actually a way to "setup once - work with all tools" goal. Next I'll explain how to achieve it.

### The symlinking part

In a nutshell we just need to `cd` to `node_modules` and to `ln -s` some link there. But we need to automate that, to have the same setup for all developers, CI machines and ourselves after some `rm -rf node_modules`.

NPM's `preinstall` and `postinstall` hooks come in handy here. And it's nice to use Node/JavaScript since every engineer working with RN knows the language, right?

<details><summary>CLICK ME to see the whole script</summary>
<div>

`gist:zubko/6e6b8ddde6fb03b3109416dae8b6a04e`

</div>
</details>
<br>

This looks much longer than `.. ln -s ..`! It's true, but some RN developers can be on Windows, so for them terminal commands won't work so easily and it nice to show some echos in the process to make it visible what is happening.

It's good to notice that NPM sets the `npm_lifecycle_event` [env var](https://docs.npmjs.com/misc/scripts#current-lifecycle-event) before calling a script, so we can avoid passing the params to it. And to make it work we just need to add these steps to `package.json`:

```json
  ...
  "scripts": {
    "preinstall": "node ./scripts/link_folders.js",
    "postinstall": "node ./scripts/link_folders.js",
    ...
  }
```

### ... OK, but why do we need `preinstall`?

Ideally one `postinstall` should be enough. But there was a strange issue with Yarn. It would delete the contents of symlinked folders found in `node_modules`. Yarn developers reported this issue fixed and then [it came again](https://github.com/yarnpkg/yarn/issues/2238), but looks like it only deletes the folders for the symlinks starting with&nbsp;`@`.

So we are safe at the moment, but I'd keep cleaning up before `yarn install` just as a precautious measure in case if some regressions or behavior changes happen.

And still it's never can be too good to save your changes, <font color="red">commit your code often</font> (at least locally and `git ammend` it), and for sure pls keep all code in git (or alternative).

### ... Wait, so is this one script enough?

Almost. And it would be, if Metro bundler could work with symlinks. [But it can't do it yet](https://github.com/facebook/metro/issues/1). So we customize its logic a bit through the config file, we can provide "extra modules".

<div id="option-three-tweak-metro"></div>

Just add your folders to `metro.config.js` and now we are good to go, for example:

```js
const rootDir = __dirname;
module.exports = {
  resolver: {
    extraNodeModules: {
      '@app/core': `${rootDir}/app/core`,
      '@app/features': `${rootDir}/app/features`,
    },
  },
  transformer: {
      ...
  },
  ...
};
```

Also if you have an `ESLint` rule to check for absolute imports missing from the `package.json`, this rule has to be altered to ignore those dirs.

### ... But won't we get 2 copies of the same module in our bundle?

Actually, no. The imports are different, but the path of the module file remains the same.

You can test it, do a number of different imports, absolute and relative, then build a release bundle with:

```sh
bundle --platform ios --dev false --entry-file index.js --bundle-output=bundle.js
```

Then find your modules in the bundle by searching for some const from it.

### ... Is this it? Can we go back to work on those features important for our business?

Yes. Almost.

There is one more option to consider. Actually, Yarn developers added a way to [symlink packages listed as dependencies](https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-link-dependency-type.md). This will not work for `npm`, so by going this way we are kind of deviating from the standard.

To make it work, instead of using postinstall script, add your folders to `package.json`'s `dependencies`:

```json
  "dependencies": {
    "@app/core": "link:./app/core",
    "@app/features": "link:./app/features",
    ...
```

And you will need to add a minimal placeholder `package.json` to each folder (kind of like with the [option #1](#option-one)). Having `{ "name": "core", "version": "1.0.0" }` seems enough.

The links will be created on `yarn install` and then it will be only left to tweak `metro.config.js` as for the [option #3](#option-three-tweak-metro)

I don't like to put package.json in each folder without actually releasing a package. Now extra package.jsons will interfere in the list of hints when doing quick open and the folders are less clean.

But at the same time `ESLint` will be happy without tweaking any rules. And there is no extra utility script to maintain. At the same time we will be left on the mercy of Yarn to make it work right for us and this feature isn't much documented or used. So there are pros and cons, as usual.

Alright, happy coding!