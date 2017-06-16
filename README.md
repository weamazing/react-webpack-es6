# React development environment

<small>Created On: 06.16.2017</small><br/>
<small>Last Updated: 06.16.2017</small><br/>
<small>Authors: [Kaka Sun](mailto:3940797@qq.com)</small>

## Introduction

It's an basic tempalte of React development environment with Webpack and ES6.

## Background

### Important URLs

- [Git Repo](https://github.com/weamazing/react-webpack-es6.git) - https://github.com/weamazing/react-webpack-es6.git
- [React](https://facebook.github.io/react/)
- [Babel](http://babeljs.io/)
- [Webpack](https://webpack.js.org)

### Project Structure

```
|-- src - It's an sample to test.
	|-- components
	|-- styles
|-- dist
	|-- index.html
.babelrc
.gitignore
LICENSE
package.json
README.md
webpack.config.js
```

### Plugin, Libraries, Modules

#### Dependencies

* lodash: ^4.17.4",
* react: ^15.6.1",
* react-dom: ^15.6.1"

#### Dev Dependencies
* babel-cli: ^6.24.1",
* babel-loader: ^6.0.0",
* babel-preset-env: ^1.5.2",
* babel-preset-es2015: ^6.24.1",
* babel-preset-react: ^6.24.1",
* babel-preset-stage-0: ^6.5.0",
* css-loader: ^0.28.4",
* file-loader: ^0.11.2",
* style-loader: ^0.18.2",
* webpack: ^2.6.1",
* webpack-dev-server: ^2.4.5"

---

## Getting Started

### Dev Dependencies Setup

1. Apache or Mamp is required
2. Install [Node v~6.11.0](https://nodejs.org/en/download/)
3. Install [Grunt](http://gruntjs.com/): `npm install -g grunt-cli`
4. Install [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

### Project Setup

Ensure developers dependencies (above) are setup:

1. `git clone git@github.com:weamazing/react-webpack-es6.git`.
2. `cd /path/to/app/`
3. `npm install`

### Tasks

- `run-script` :	- Build a development version.
- `start` :			- Build a development version with Webpack HMR.

---
