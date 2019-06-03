import React from "react";
import firebase from "firebase";
import "./style.scss";

class Account extends React.Component {
  state = { email: "", password: "", error: "", loading: false };
  // onLoginPress = () => {
  //   const { email, password } = this.state;
  //   this.setState({ error: "", loading: true });
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(this.onLoginSuccess())
  //     .catch(() => {
  //       this.onLoginFail();
  //     });
  // };
  // onLoginPress=()=> {
  //   const { email, password } = this.state;
  //   this.setState({ error: "", loading: true });
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(this.onLoginSuccess())
  //     .catch(() => {
  //       firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(email, password)
  //         .then(this.onLoginSuccess.bind(this))
  //         .catch(this.onLoginFail.bind(this));
  //     });
  // }

  // onLoginSuccess = () => {
  //   this.setState({
  //     email: "",
  //     password: "",
  //     error: "",
  //     loading: false
  //   });
  //   console.log("login succeed");
  // };
  // onLoginFail = () => {
  //   this.setState({
  //     error: "Authentication Failed",
  //     loading: false
  //   });
  //   console.log("login failed");
  // };
  // onSignUpSuccess() {
  //   this.setState({
  //     email: "",
  //     password: "",
  //     error: "",
  //     loading: false
  //   });
  // }
  // onSignUpFail() {
  //   this.setState({
  //     error: "Sign Up Failed",
  //     loading: false
  //   });
  // }
  render() {
    return (
      <div class="container login-container">
        <div class="row">
          <div class="col-md-6 login-form-1">
            <h3>Login</h3>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email *"
                  value={this.state.email}
                  onChange={email => this.setState({ email })}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Your Password *"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </div>
              <div class="form-group">
                <input
                  onSubmit={this.onLoginPress}
                  type="submit"
                  class="btnSubmit"
                  value="Login"
                />
              </div>
              <div class="form-group">
                <a href="#" class="ForgetPwd">
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
          <div class="col-md-6 login-form-2">
            <h3>Sign Up</h3>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Your Password *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input type="submit" class="btnSubmit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
