/**
 * @format
 */

import React, { Component} from 'react'
import { View} from 'react-native'

import {AppRegistry} from 'react-native';
// import App from './App';
import TicTacToeFunction from './TicTacToe'

import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);




// AppRegistry.registerComponent(appName, () => TicTacToeClass.render());

AppRegistry.registerComponent(appName, () =>TicTacToeFunction);
/* <helloWorld></helloWorld> */
