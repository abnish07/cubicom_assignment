import React from 'react'
import DashboardContent from './DashboardContent';
import './Dashboard.css';

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div class="row">
  <div class="col-2 pt-3 leftMenu">
    <div class="nav flex-column " id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link leftNav  active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
          <img src="./images/dashboard.png" className="mr-2" />
          Dashboard
          </a>
      <a class="nav-link leftNav dropdown" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
         <img src="./images/operation.png" 
         className="mr-2"
         />
          Operations
      </a>

      <a class="nav-link leftNav" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
      <img src="./images/tracking.png" className="mr-2" />
          Tracking
      </a>

      <a class="nav-link leftNav" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
          <img src="./images/report.png" alt="report_icon" className="mr-2" />
          Reports
      </a>

      <a class="nav-link leftNav" id="v-pills-settings-tabC" data-toggle="pill" href="#v-pills-settingsC" role="tab" aria-controls="v-pills-settingsC" aria-selected="false">
          <img src="./images/configuration.png" alt="configuraton" className="mr-2" />
          Configurations
      </a>
    </div>
  </div>

  <div class="col-10">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          
          <DashboardContent />
          </div>

      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          
          ...</div>

      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          
          ...</div>

      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
          ...</div>

      <div class="tab-pane fade" id="v-pills-settingsC" role="tabpanel" aria-labelledby="v-pills-settings-tabC">
          Configurations
          </div>

    </div>
  </div>
</div>
            </>
         );
    }
}
 
export default LeftMenu;