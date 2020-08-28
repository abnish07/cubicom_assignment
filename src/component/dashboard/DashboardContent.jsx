import React from 'react'
import LeftMenu from './LeftMenu';
import Booking from './Booking';
import SearchIcon from './SearchIcon';
import PieChart from './PieChart';
import PerformanceTable from './Performancetable';

class DashboardContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <div className="dashboardCanvas">
                <p className="dashboardWord d-flex ">
                    Dashboard
                    <SearchIcon />
                </p>
                <div className="row">
                <div className="bookingCanvas">
                    <Booking />                   
                 
                </div>
                <PieChart />
                </div>
                <PerformanceTable />
                </div>
            </>
         );
    }
}
 
export default DashboardContent;