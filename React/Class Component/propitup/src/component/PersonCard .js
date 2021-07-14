import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }
    render() {
        return (
            <malak>
                <h1>{this.props.firstname}, {this.props.lastname}</h1>
            <p>Age: {this.state.age} </p>
            <p>Hair Color: {this.props.color}</p>
            <button onClick={ ()=> {this.setState({age:this.state.age+1}) }}>Click Me</button>
            </malak>
        );
    }
}
export default PersonCard;