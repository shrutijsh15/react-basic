import React, { Component } from 'react';
import Routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

export default class App extends Component{
    render(){
        return <Router>
            <Routes/>
        </Router>
    }
}