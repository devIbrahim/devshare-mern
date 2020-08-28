import React from "react";

import { Link, Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormData: {
        email: "",
        password: "",
      },
      redirect: null,
      errors: {},
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    let loginFormDataCopy = JSON.parse(
      JSON.stringify(this.state.loginFormData)
    );

    loginFormDataCopy[name] = value;

    this.setState({
      loginFormData: loginFormDataCopy,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.loginFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          this.setState({ errors: data.errors });
          console.log(data.errors);
        } else if (data.user) {
          this.setState({ redirect: "/" });
        }
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    let errVals = Object.values(this.state.errors);

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h1>LOGIN</h1>
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            className="input-field"
            placeholder="email / username"
            value={this.state.loginFormData.email}
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            className="input-field"
            placeholder="password"
            value={this.state.loginFormData.password}
          />
          <input type="submit" value="LOGIN" />
          <Link to="/signup">Sign up</Link>
          <Link to="/">Home</Link>
          <ul>
            {errVals.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default Login;
