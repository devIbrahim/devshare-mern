import React from "react";

import { Link, Redirect } from "react-router-dom";

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
      errors: {},
      redirect: null,
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
      .then((data) => {
        if (data.errType === "password-match-fail") {
          this.setState({ errors: { password: data.error } });
        } else if (data.errType === "invalid-data") {
          this.setState({
            errors: data.errors,
          });
        } else if (data.user) {
          this.setState({
            errors: {},
          });
          // redirect
          this.setState({ redirect: "/" });
        }
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    let errKeys = Object.values(this.state.errors);

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
          <div className="errors">
            <ul>
              {errKeys.map((err, i) => {
                if (err.length) {
                  return <li key={i}>{err}</li>;
                } else {
                  return false;
                }
              })}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
