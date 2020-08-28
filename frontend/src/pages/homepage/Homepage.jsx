import React from "react";

import Loader from "./loader.png";
import "./homepage.css";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fetch("/user/userdata")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data.USER_DATA });
      });
  }

  render() {
    return this.state.user === null ? (
      <div className="loading-homepage">
        <img alt="Loading..." id="loader" src={Loader} />
      </div>
    ) : (
      <h1 id="home-title">HELLO, {this.state.user.fullname} </h1>
    );
  }
}

export default Homepage;
