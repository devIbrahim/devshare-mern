import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from "./pages/homepage/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import "./App.css";

const Test = () => <h1>TEST</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: null,
    };
  }

  componentDidMount() {
    fetch("/user/userdata")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ authed: data.authed });
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <PrivateRoute
            authed={this.state.authed}
            exact
            path="/"
            component={Homepage}
          />
          <PublicRoute
            authed={this.state.authed}
            publicOnly={true}
            exact
            path="/login"
            component={Login}
          />
          <PublicRoute
            publicOnly={true}
            authed={this.state.authed}
            exact
            path="/signup"
            component={Signup}
          />
          <Route exact path="/test" component={Test} />
        </Router>
      </div>
    );
  }
}

export default App;
