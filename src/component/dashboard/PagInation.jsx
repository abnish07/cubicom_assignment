import React from "react";
import data from "../../data.json";

class PagInation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pageNumbers, pagInate } = this.props;

    return (
      <>
        <nav>
          <ul className="pagination mt-3">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <small>
                  <a
                    onClick={() => pagInate(number)}
                    href="#"
                    className="page-link"
                  >
                    {number}
                  </a>
                </small>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
}

export default PagInation;
