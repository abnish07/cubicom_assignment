import React from "react";
import "./LoginForm.css";
import Welcome from "./Welcome";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="headerImage ">
          <div className="canvas">
          <form>
              <Welcome />
              <p className="belowWelcome">
                We make easy for everyone to manage logistics operations.
              </p>

            <div class="form-group">
              <label for="exampleInputEmail1" className="labelStyle">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1" 
              className="labelStyle"
              >Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
              />
            </div>

            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label labelStyle" for="exampleCheck1">
                Remember me
              </label>
              <span className="float-right labelStyle">
                Forgot Password?
              </span>
            </div>
          
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
