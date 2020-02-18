import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Client from './pages/clients';

const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} /> 
            <Route path="/clients/:id" component={Client} /> 
        </Switch>
    </BrowserRouter>
}

export default Routes;
