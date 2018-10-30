import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const home = () => {<div>Homepage</div>}
const about = () => {<div>About</div>}

const AppRoutes = () => (
    <Router>
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            </ul>
        </nav>
    
        <Route path="/" exact component={home} />
        <Route path="/about/" component={about} />
        </div>
    </Router>
)  

export default AppRoutes;