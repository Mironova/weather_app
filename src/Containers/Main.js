var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass ({
  render() {
      return(
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WeatherApp</a>
              </div>
              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="City"/>
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>
            </div>
          </nav>
          {this.props.children}
        </div>
    );
  }
});

module.exports = Main;