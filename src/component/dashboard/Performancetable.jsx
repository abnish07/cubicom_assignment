import React from "react";
import data from "../../data.json";
import PagInation from "./PagInation";

class PerformanceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemPerPage: 6,
      currentData: [],
      pageNumbers: [],
      totalData: 30,
      data: data,
      demo: "",
    };
  }

  componentDidMount() {
    this.handleChange();
    // console.log("pagenumber", this.state.data)
  }

  handleChange = () => {
    const { totalData, itemPerPage, pageNumbers } = this.state;
    for (let i = 1; i <= Math.ceil(totalData / itemPerPage); i++) {
      this.setState(
        {
          pageNumbers: [...pageNumbers, i],
        },
        () => {
          console.log(i);
        }
      );
    }
  };

  pagInate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    const {
      itemPerPage,
      currentPage,
      totalData,
      data,
      pageNumbers,
    } = this.state;
    console.log("pageNumbers", pageNumbers);
    if (pageNumbers.length !== 5) {
      this.handleChange();
      return "Loading...";
    }
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <>
        <h2 className="performance">FE Performance</h2>
        <table class="table table-hover">
          <thead>
            <tr className="tableHead">
              <th scope="col">FE NAME</th>
              <th scope="col">DEL</th>
              <th scope="col">UNDEL</th>
              <th scope="col">NA</th>
              <th scope="col">DELIVERY IN %</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr className="recordStyle" key={item.feName}>
                <td>{item.feName}</td>
                <td>{item.del}</td>
                <td>{item.unDel}</td>
                <td>{item.nA}</td>
                <td>
                  <div className="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${item.delivery}%` }}
                      aria-valuenow={item.delivery}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {" "}
                      {item.delivery + "%"}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex mt-32 float-right pr-5">
          <small className="align-self-center">
            <img src="./images/icon_left.png" />
          </small>
          <PagInation pageNumbers={pageNumbers} pagInate={this.pagInate} />
          <small className="align-self-center">
            <img src="./images/icon_right.png" />
          </small>
        </div>
      </>
    );
  }
}

export default PerformanceTable;
