import React from "react";
import ReactDOM from "react-dom";
import CryptoJS from "crypto-js";
import Sociallogin from "./SocialLogin";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", emial: "" };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
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
  handleEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    var strongPass = CryptoJS.MD5(this.state.password);
    alert(
      "username: " +
        this.state.username +
        "\npassword: " +
        this.state.password +
        "\nemail: " +
        this.state.email +
        "\ncrypt: " +
        strongPass
    );
  }

  render() {
    return (
      <div class="loginBox">
        <Sociallogin />
        <form onSubmit={this.handleSubmit}>
          <label>
            UserName:
            <input
              id="something"
              type="text"
              onChange={this.handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              id="passwordVal"
              type="password"
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input id="Email" type=" Email" onChange={this.handleEmailChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default CreateUser;
