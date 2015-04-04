'use strict';
var App, AppRegistry, React;

React = require('react-native');

AppRegistry = React.AppRegistry;

App = require('./dist/app');

AppRegistry.registerComponent('ReactNativeCoffee', function() {
  return App;
});
