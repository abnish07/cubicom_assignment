import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenuData } from "../component/redux/action";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleBar: true,
    };
  }

  render() {
    const { toggleMenuData, state } = this.props;

    console.log("handleClick", this.state.toggleBar);
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-white border">
          <ul class="navbar-nav mr-auto ">
            {!state ? (
              <li class="nav-item mt-2 mx-2" style={{ width: 20 }}>
                <img
                  src="./images/bars.svg"
                  onClick={() => toggleMenuData(this.state.toggleBar)}
                />
              </li>
            ) : (
              ""
            )}
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://cubicom.vercel.app/"
                target="_blank"
              >
                <img src="./images/logo.png" className="logoImage" />
              </a>
            </li>
          </ul>
          <form class="form-inline ">
            <select className="form-control select mt-4 mr-4">
              <option value="location1">Location1</option>
              <option value="location2">Location2</option>
              <option value="location3">Location3</option>
              <option value="location4">Location4</option>
            </select>
            <img
              src="https://static.thenounproject.com/png/212110-200.png"
              class="profileImage"
            />
          </form>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.toggleData,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuData: (query) => dispatch(toggleMenuData(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
