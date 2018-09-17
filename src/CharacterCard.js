import React, { Component } from 'react';
import  './App.css';

export default class CharacterCard extends Component{
    render(){
        return(
            <div className="card">
                {this.props.value}
            </div>   
        )
    }
}