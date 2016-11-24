var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass ({
  render() {
      return(
        <div>
          <div className="col-md-3">Logo</div>
          <div className="col-md-9">Header</div>
          {this.props.children}
        </div>
    );
  }
});

module.exports = Main;