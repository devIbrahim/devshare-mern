import React from "react";

import { Link } from "react-router-dom";

class Signup extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  render() {
    return (
      <div className="signup">
        <form className="signup-form">
          <h1>SIGN UP</h1>
          <input
            name="fullname"
            type="text"
            className="input-field"
            placeholder="full name"
          />
          <input
            name="email"
            type="email"
            className="input-field"
            placeholder="email address"
          />
          <input
            name="username"
            type="text"
            className="input-field"
            placeholder="username"
          />
          <input
            name="password"
            type="password"
            className="input-field"
            placeholder="password"
          />
          <input
            name="repeatPassword"
            type="password"
            className="input-field"
            placeholder="confirm password"
          />
          <input type="submit" value="SUBMIT" />
          <Link to="/login">Login</Link>
        </form>
      </div>
    );
  }
}

export default Signup;
