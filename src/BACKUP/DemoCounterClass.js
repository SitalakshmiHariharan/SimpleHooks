import React, { Component } from 'react';
//import { Text, StyleSheet, View } from 'react-native'

class DemoCounterClass extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
  
    render() {
        return (
            <div>
                <h2>You have clicked {this.state.count} times</h2>
                <button onClick = {()=> this.setState({count: this.state.count + 1 })}>Increment</button>
                <button onClick = {()=> this.setState({count: this.state.count - 1 })}>Decrement</button>
            </div>
        )
    }
}

export default DemoCounterClass;