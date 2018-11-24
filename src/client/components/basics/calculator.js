import React, {Component} from 'react';
import BoilingVerdict from './boilingVerdict';

export default class Calculator extends Component{
    constructor(){
        super();
        this.state = {
            temperature: 0
        }
    }

    handleChange = (e, count) => {
        this.setState({
            temperature: e.target.value
        });
    }

    render(){
        return(
            <div>
              <fieldset>
                    <legend>Enter temperature in Celsius:</legend>
                    <input 
                      type='number' name='temperature' 
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.temperature}
                    ></input>
                    <BoilingVerdict temperature={this.state.temperature} />
                </fieldset>
            </div>
        )
    }
}