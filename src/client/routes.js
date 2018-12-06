import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Basics from './components/basics/basics';

const home = () => { return <div>Homepage</div>}
const about = () => {return <div>About</div>}

const AppRoutes = () => (
    <div>
        <ul>
        <li><Link to='/about'>About</Link></li>
            <li><Link to='/basics'>Basics</Link></li>
        </ul>
        <Switch>
            <Route path="/" exact component={home} />
            <Route path="/about/" exact component={about} />
            <Route path="/basics/" exact component={Basics} />
        </Switch>
    </div>
)  

export default AppRoutes;