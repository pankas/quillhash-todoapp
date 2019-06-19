import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const auth = localStorage.getItem('auth');
console.log("dhd",auth)
const authenticate = (auth) => {
    if(auth)
        return true;
    return false;
}

const AuthRoute = (props) => {
    let newProps = JSON.parse(JSON.stringify(props)), Component = props.component;
    // delete newProps.component;
    return (
        <Route {...newProps} render={props => (
            authenticate(auth) ?
                <Component {...props} /> :
                <Redirect to={{
                    pathname: "/"
                }} />
        )}
        />
    )
}

export default AuthRoute