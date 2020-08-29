import React from 'react'
import DashboardContent from './DashboardContent';
import './Dashboard.css';
import { connect } from 'react-redux';
import { toggleMenuData } from '../redux/action';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleState: false
         }
    }

    render() { 
        const { toggleMenuData, toggleData } = this.props;
        console.log("leftMenu", toggleData)
        return ( 
            <>
               
  <div class="col-2 pt-3 leftMenu">
    <div class="nav flex-column ">
      <a class="nav-link leftNav  active">
          <img src="./images/dashboard.png" className="mr-2" />
          Dashboard
          </a>
      <a class="nav-link leftNav dropdown">
         <img src="./images/operation.png" 
         className="mr-2"
         />
          Operations
          <img src="./images/icon_right.png" style={{transform: "rotateZ(90deg)"}} className="ml-4" />
      </a>

      <a class="nav-link leftNav">
      <img src="./images/tracking.png" className="mr-2" />
          Tracking
      </a>

      <a class="nav-link leftNav">
          <img src="./images/report.png" alt="report_icon" className="mr-2" />
          Reports
      </a>

      <a class="nav-link leftNav">
          <img src="./images/configuration.png" alt="configuraton" className="mr-2" />
          Configurations
      </a>
    </div>
    <div className="toggleMenu" onClick={()=>toggleMenuData(this.state.toggleState)}>
            <img src="./images/doublearrow.svg" className="backIcon" />
           
  </div>
  </div>


            </>
         );
    }
}
 
const mapStateToProps=(state)=>({
    state: state.toggleData
})

const mapDispatchToProps=(dispatch)=>({
    toggleMenuData: (query)=>dispatch(toggleMenuData(query))
})

export default connect(mapStateToProps,mapDispatchToProps )(LeftMenu);