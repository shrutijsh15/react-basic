import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Persons extends Component{
    constructor(){
        super();
        this.state = {
            switch: false
        }
    }

    handleClick = (name='') => {
        console.log(this)
        console.log(name);
    }

    render(){
        const names = ['shruti', 'kedar'];
        return <div>
            <h4>Events</h4>
            <Link to='/about'>Home</Link>

            <br/>
            {
                names.map((item, key) => {
                    return <button onClick={this.handleClick} key={key}>{item}</button>
                })
            }
             <br/>
            {
                names.map((item, key) => {
                    return <button onClick={this.handleClick.bind(this, item)} key={key}>{item}</button>
                })
            }
        </div>    
    }
    
}