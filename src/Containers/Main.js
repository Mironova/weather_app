var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass ({
  render() {
      return(
        <div>
          Main component
          {this.props.children}
        </div>
    );
  }
});

module.exports = Main;