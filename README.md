[redux-middleware-oneshot][]
=================

[![license](https://img.shields.io/npm/l/redux-middleware-oneshot.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-oneshot)
[![npm version](https://img.shields.io/npm/v/redux-middleware-oneshot.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-oneshot)
[![npm downloads](https://img.shields.io/npm/dm/redux-middleware-oneshot.svg?style=flat-square)](https://www.npmjs.com/package/redux-middleware-oneshot)
[![Code Climate](https://codeclimate.com/github/michaelcontento/redux-middleware-oneshot/badges/gpa.svg)](https://codeclimate.com/github/michaelcontento/redux-middleware-oneshot)
[![build](https://travis-ci.org/michaelcontento/redux-middleware-oneshot.svg)](https://travis-ci.org/michaelcontento/redux-middleware-oneshot)

Create [Redux][] actions from arbitraty sources out of middlewares.

# Deprecated - No longer maintained

My focus has left the node / react ecosystem and this module is no
longer maintained.

Thank you for your patience and using this module in the first place!

## Installation

    npm install --save redux-middleware-oneshot

## Usage

```js
// In this example, we want to create someAction in redux for every
// change-event emitted by someEventEmitter
import someEventEmitter from './someEventEmitter';
import someAction from './someAction';

// And for this we simply create a new oneShot middleware
import createOneShot from 'redux-middleware-oneshot';
const myMiddleware = createOneShot((dispatch) => {
    // This function is called exactly once as soon as the first action
    // runs through redux. Perfect moment to glue things together!
    someEventEmitter.addEventListener('change', (event) => {
        dispatch(someAction(event.value));
    });
});

// Everything else is straight forward Redux ...
import { createStore, applyMiddleware, combineReducers } from 'redux';
const createStoreWithMiddleware = applyMiddleware(myMiddleware)(createStore);
const store = createStoreWithMiddleware(/* reducer */);
```

## Todo

- Write tests for everything!

  [Redux]: https://github.com/gaearon/redux
  [redux-middleware-oneshot]: https://github.com/michaelcontento/redux-middleware-oneshot
