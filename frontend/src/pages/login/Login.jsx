import React from "react";

import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormData: {
        email: "",
        password: "",
      },
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

  handleLogin = async (e) => {
    e.preventDefault();

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.loginFormData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleLogin} className="login-form">
          <h1>LOGIN</h1>
          <input
            required
            onChange={this.handleChange}
            name="email"
            type="text"
            className="input-field"
            placeholder="email / username"
            value={this.state.loginFormData.email}
          />
          <input
            required
            onChange={this.handleChange}
            name="password"
            type="password"
            className="input-field"
            placeholder="password"
            value={this.state.loginFormData.password}
          />
          <input type="submit" value="LOGIN" />
          <Link to="/signup">Sign up</Link>
        </form>
      </div>
    );
  }
}

export default Login;
