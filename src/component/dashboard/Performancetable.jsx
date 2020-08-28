import React from 'react'

class PerformanceTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <h2 className="performance">
                FE Performance 
            </h2>
               <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">FE NAME</th>
      <th scope="col">DEL</th>
      <th scope="col">UNDEL</th>
      <th scope="col">NA</th>
      <th scope="col">DELIVERY IN %</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-light table-row">
      <th scope="row">1</th>
      <td >Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
            </>
         );
    }
}
 
export default PerformanceTable;