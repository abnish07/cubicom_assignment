import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { connect } from 'react-redux';

function Routes(props){
    const { loginData } = props;
    return(
        <>
        <Switch>
            <Route exact path="/" component={Home}/>

            {/* {loginData &&  loginData.status === 200? */}
            <Route path="/dashboard" 
            render={(props)=><Dashboard {...props}/>} />
            :
            {/* <Redirect to="/" /> */}
            {/* }  */}
            </Switch>
        </>
    )
}

const mapStateToProps = (state) => ({
    loginData: state.loginData,
    // toggleData: state.toggleData
  });
  

export default connect(mapStateToProps, null)(Routes);