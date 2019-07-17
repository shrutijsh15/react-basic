import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Basics from './components/basics/basics';
import Dashboard from './components/dashboard';

const AppRoutes = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Dashboard} />
        </Switch>
    </div>
)  

export default AppRoutes;