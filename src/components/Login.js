import React from "react";
import ReactDOM from "react-dom";
import CryptoJS from "crypto-js";
import Sociallogin from "./SocialLogin"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsernameChange(event) {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    var strongPass = CryptoJS.MD5(this.state.password);
    alert(
      "username: " +
        this.state.username +
        "\npassword: " +
        this.state.password +
        "\npassword: " +
        strongPass
    );
  }

  render() {
    return (
      <div class="loginBox">
      <Sociallogin />
        <form onSubmit={this.handleSubmit}>
          Login:
          <br />
          <label>
            Username:
            <input type="text" onChange={this.handleUsernameChange} />
            <br />
          </label>
          <label>
            Password:
            <input
              id="passwordVal"
              type="password"
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Login;
