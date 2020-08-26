import React from "react";

import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupFormData: {
        fullname: "",
        email: "",
        username: "",
        password: "",
        repeatPassword: "",
      },
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    let signupFormDataCopy = JSON.parse(
      JSON.stringify(this.state.signupFormData)
    );

    signupFormDataCopy[name] = value;

    this.setState({
      signupFormData: signupFormDataCopy,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.signupFormData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <h1>SIGN UP</h1>
          <input
            onChange={this.handleChange}
            name="fullname"
            type="text"
            className="input-field"
            placeholder="full name"
          />
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            className="input-field"
            placeholder="email address"
          />
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            className="input-field"
            placeholder="username"
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            className="input-field"
            placeholder="password"
          />
          <input
            onChange={this.handleChange}
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
