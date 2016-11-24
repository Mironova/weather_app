var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./Config/routes');
require('bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  routes,
  document.getElementById('root')
);
