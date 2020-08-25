import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Homepage from "./pages/homepage/Homepage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
