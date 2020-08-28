import React from 'react';
import './LoginForm.css';

function Welcome(){

    return(
        <>
            <div className="welcome" >
                <span >
                   Welcome to 
                </span>
                {/* <span className="logo"> */}
                    <img src="/images/logo192.png" className="logo" />
                {/* </span> */}
            </div>
        </>
    )
}

export default Welcome;