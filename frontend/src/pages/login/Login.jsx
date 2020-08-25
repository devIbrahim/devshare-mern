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
    // let newState = this.state;
    // newState.loginFormData[name] = value;

    let loginFormDataCopy = JSON.parse(
      JSON.stringify(this.state.loginFormData)
    );

    loginFormDataCopy[name] = value;

    this.setState({
      loginFormData: loginFormDataCopy,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleLogin} className="login-form">
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
        </form>
      </div>
    );
  }
}

export default Login;
