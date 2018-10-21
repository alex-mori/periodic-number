# My first web project (Proof of concept)

## App scope

Given an periodic number, the app finds the fraction that generates that number.

## Software dependencies

1. [Yarn](https://yarnpkg.com) to manage node packages
2. [Babel](https://babeljs.io) to tranpile ES6 in ES5
3. [Sass](https://sass-lang.com)
4. [Bootstrap](https://getbootstrap.com/) to use an easy nice and responsive user interface
5. [Static server](https://github.com/nbluis/static-server) to load the app on a local server

## Setup

1. [Clone the project from git](https://github.com/alex-mori/periodic-number)
2. Download all dependences by launching the command `yarn`
3. Run the server by launching the command `yarn run server`
4. If you'd like to change the code you can run the transpiler (webpack) by launching the command `yarn run dev`

## How to use the app

The app expose 3 different input texts related to the 3 parts of periodic number (integer, decimal, periodic). The input texts accept just numbers (the input of other chars is disabled), when the user changes the inputs content the app shows directly how the periodic number looks like. When the user clicks on the submit button the app calculate and show the related fraction.