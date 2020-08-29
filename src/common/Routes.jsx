import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

function Routes(){

    return(
        <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" 
            render={(props)=><Dashboard {...props}/>} />
            </Switch>
        </>
    )
}

export default Routes;