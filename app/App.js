var App, MainView, React;

React = require('react-native');

MainView = require('./views/main');

App = React.createClass({
  render: function() {
    return React.createElement(MainView, {
      "myCustomProp": '!'
    });
  }
});

module.exports = App;
