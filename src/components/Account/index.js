import React from "react";
import firebase from "firebase";
import history from "../../services/history";
import "./style.scss";

class Account extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
    signupEmail: "",
    signupPassword: "",
    signupError: "",
    signupLoading: false
  };

  onLoginPress = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .then(e => {
        this.onLoginSuccess(e);
      })
      .catch(e => {
        this.onLoginFail(e);
      });
  };
  onSignupPress = event => {
    event.preventDefault();
    const { signupEmail, signupPassword } = this.state;
    this.setState({ signupError: "", signupLoading: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then(e => this.onSignUpSuccess(e))
      .catch(e => this.onSignUpFail(e));
  };

  onLoginSuccess = e => {
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false
    });
    if (e.operationType === "signIn") {
      history.push("/");
    }
  };
  onLoginFail = e => {
    this.setState({
      error: e.message,
      loading: false
    });
  };
  onSignUpSuccess = e => {
    this.setState({
      signupEmail: "",
      signupPassword: "",
      signupError: "",
      SignupLoading: false
    });
    if (e.operationType === "signIn") {
      history.push("/");
    }
  };
  onSignUpFail = e => {
    this.setState({
      signupError: e.message,
      signupLoading: false
    });
  };
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
                  onChange={email =>
                    this.setState({ email: email.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Your Password *"
                  value={this.state.password}
                  onChange={password =>
                    this.setState({ password: password.target.value })
                  }
                />
              </div>
              <div class="form-group">
                {!!this.state.error && (
                  <div className="error-message__login">{this.state.error}</div>
                )}
              </div>
              <div class="form-group">
                <button onClick={this.onLoginPress} class="btnSubmit">
                  Login
                </button>
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
                  value={this.state.signupEmail}
                  onChange={email =>
                    this.setState({ signupEmail: email.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Your Password *"
                  value={this.state.signupPassword}
                  onChange={password =>
                    this.setState({ signupPassword: password.target.value })
                  }
                />
              </div>
              <div class="form-group">
                {!!this.state.signupError && (
                  <div className="error-message__signup">
                    {this.state.signupError}
                  </div>
                )}
              </div>
              <div class="form-group">
                <input
                  onClick={this.onSignupPress}
                  type="submit"
                  class="btnSubmit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
