import React from "react";
import "./LoginForm.css";
import Welcome from "./Welcome";
import { connect } from "react-redux";
import { userLogin } from '../redux/action';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { email, password } = this.state;
    const { handleChange } = this;
    const { userLogin } = this.props;
    console.log(email, password)
    return (
      <>
        <div className="headerImage" 
        style={{
           backgroundImage: "url(" + "./images/component.png" + ")"
          }}>
          <div className="canvas">
              <Welcome />
              <p className="belowWelcome">
                We make easy for everyone to manage logistics operations.
              </p>
          <form className="form">

            <div class="form-group">
              <label for="exampleInputEmail1" className="labelStyle">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
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
                name="password"
                value={password}
                onChange={handleChange}
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
              <span className="forgot ">
                Forgot Password?
              </span> 
            </div>  
          
          
            <button type="submit" class="loginBtn" onClick={()=>userLogin(this.state)}>
              Login
            </button>
          </form>
        </div>
        </div>
      </>
    );
  }
}


// const mapStateToProps = (state) => ({
//   state: state.toggleData,
// });

const mapDispatchToProps = (dispatch) => ({
  userLogin: (query) => dispatch(userLogin(query)),
});


export default connect(null, mapDispatchToProps)(LoginForm);