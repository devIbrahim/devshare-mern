import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from "./pages/homepage/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { hello } from "./utils/isLoggedIn";

import "./App.css";

const Test = () => <h1>TEST</h1>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authed: hello(),
    };
  }

  // async UNSAFE_componentWillMount() {
  //   // fetch("/user/userdata")
  //   // .then((res) => res.json())
  //   // .then((data) => {
  //   //   if (data.user_data) {
  //   //     console.log(data);
  //   //     return true;
  //   //   } else {
  //   //     console.log(data);
  //   //     return false;
  //   //   }
  //   // });
  //   await axios.get("/user/userdata").then((res) => {
  //     if (res.user_data !== undefined) {
  //       this.setState({ authed: true });
  //     } else {
  //       this.setState({ authed: false });
  //     }
  //     console.log(res.data);
  //   });
  // }

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
