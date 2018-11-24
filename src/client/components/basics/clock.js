import React, { Component } from 'react';

export default class Clock extends Component{
    constructor(){
        super();
        this.state = {
            timeStr: new Date().toLocaleTimeString(), 
            switch: false
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick(){
        this.setState({
            timeStr: new Date().toLocaleTimeString()
        })
    }

    test = () => {
        console.log('ere')
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return <div>
            <h4>State</h4>
            <div>We are at {this.state.timeStr}</div>
        </div>    
    }
    
}