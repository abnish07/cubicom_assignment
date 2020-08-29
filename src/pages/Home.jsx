import React from 'react'
import LoginForm from '../component/loginForm/LoginForm';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <LoginForm />
         );
    }
}
 
export default Home;