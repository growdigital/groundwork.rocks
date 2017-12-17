---
title: Changes around here
date: 2017-12-17
layout: post.hbs
collections: posts
draft: false
---

There’s been some major changes in Groundwork lately. Firstly tidying up the templates so that `title` works for posts and pages, and pages have a `slug` attribute, so that the permalink can be different to the title. Also, I have installed [semantic-release](https://www.npmjs.com/package/semantic-release), which means the [semantic versioning](https://semver.org/) is far easier to manage. If you’re interested in why this is important, read [The Twelve-Factor App](https://12factor.net/).

On a tidy code note, Groundwork is now using [ESlint](https://eslint.org/), a [linter](<https://en.wikipedia.org/wiki/Lint_(software)>) for JavaScript, and [Prettier](https://prettier.io/), an opinionated code formatter.

Personally, I have switched to using [Visual Studio Code](https://code.visualstudio.com/) because I am hip 😎 and down with the kidz, but mostly because of its support for ESlint and [Git integration](https://code.visualstudio.com/Docs/editor/versioncontrol).

For VScode users, I’ve made a [public gist of my Markdown User Snippets](https://gist.github.com/growdigital/890afda0d0783eb284def8929ae6ee8f), for the swift creation of post and status templates.
