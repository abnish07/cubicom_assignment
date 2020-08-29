import React from 'react'
import data from '../../data.json';

class PagInation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }


    render() { 

       const { pageNumbers,pagInate } = this.props;

        return ( 
            <>
            <nav>
                <ul className="pagination">
                    { pageNumbers && pageNumbers.map(number=>
                        (<li key= {number} className="page-item">
                            <a onClick={()=>pagInate(number)} href="#" className="page-link">
                                {number}
                            </a>
                        </li>)
                        )}
                </ul>
            </nav>
            </>
         );
    }
}
 
export default PagInation;