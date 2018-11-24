import React, {Component} from 'react';
export default class BoilingVerdict extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <br/>
                {this.props.temperature > 90 ? 'Water will boil' : 'Need to get it to boiling point'}
            </div>
        )
    }
}