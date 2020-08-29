import React from 'react';
import Navbar from '../common/Navbar';
import LeftMenu from '../component/dashboard/LeftMenu';
import DashboardContent from '../component/dashboard/DashboardContent';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const { stateData }= this.props;
        return ( 
            <>
           
                <Navbar  />
                <div class="row">
                {stateData? <LeftMenu />:''}
                <div class="col-10">
    <div class="tab-content">
      <div class="tab-pane fade show active">
          
      <DashboardContent />
          
          </div>
  </div>
</div>
                </div>
            </>
         );
    }
}
 
const mapStateToProps=(state)=>({
    stateData: state.toggleData
  })


export default connect(mapStateToProps, null)(Dashboard);