import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar setUser={this.setUser} user={this.state.user} />
          <Switch>
            <Route
              path="/signup"
              render={props => (
                <Signup history={props.history} setUser={this.setUser} />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <Login history={props.history} setUser={this.setUser} />
              )}
            />
            <Route
              exact
              path="/products"
              render={props => <Products {...props} user={this.state.user} />}
            />
            <Welcome />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
