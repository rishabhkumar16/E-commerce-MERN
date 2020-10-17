import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';


const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
            </switch>
        </BrowserRouter>
        );
}

export default Routes;