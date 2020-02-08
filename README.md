[![Build Status](https://travis-ci.org/coda-it/graphen.svg?branch=master)](https://travis-ci.org/coda-it/graphen)

# Graphen UI library
[[Documentation]](https://coda-it.github.io/graphen/)
[[Tasks board]](https://trello.com/b/vhEpkIJr/project-coda-it)

## About
'graphen' is a small library, that keeps reusable blocks of UI and helps making application design consistent across multiple projects.

Graphen architecture is driven by:
* Block Element Modifier
* Object Oriented CSS

## Installation
1. Install as npm package: `npm i graphen`
2. Import `style.scss` (or particular components) into your project
3. In order to build font successfully, set `$c-icon-font-url` to point from your project root level (ex. `~graphen/src/assets/font`)

## Customization
Graphen allows to customize branding variables (palette of colors and font) to fit graphical requirements of the project it's used in.
In order to customize, checkout `src/variables/_brand.scss` for particular variables that can be overwritten.

## Others
* Name of colors are taken from [here](http://chir.ag/projects/name-that-color/)
