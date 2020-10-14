import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home'
const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Home} />
            </switch>
        </BrowserRouter>
        );
}

export default Routes;