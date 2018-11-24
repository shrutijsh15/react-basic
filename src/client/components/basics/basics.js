import React, { Component } from 'react';
import Reservation from './reservation';
import Clock from './clock';

import Persons from './persons';
import Calculator from './calculator';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    
    render(){
        return <div>  <Clock />
            <br/>
            <Persons />
            <br/>
            <Reservation />
            <br/>
            <Calculator />
        </div>
    }
}