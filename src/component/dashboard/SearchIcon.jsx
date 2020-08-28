import React from 'react'

function SearchIcon(){

    return(

    <>
        <div className="iconBox"> 

            <div className="SearchBox">
            <img src="./images/icon_search.png" className="searchIcon" />
            </div>

            <div className="SearchBox">
            <img src="./images/icon_cal.png" className="searchIcon" />
            </div>

            <div className="DateBox">
            <small>12/12/2019-18/12/2019</small>
            </div>

          
        </div>
    </>
    )
}

export default SearchIcon;