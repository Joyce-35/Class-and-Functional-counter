import React, { Component } from 'react';
import './App.css';

class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state ={
            count : 0
        }
    }
        handleIncreaseCount = (e)=> {
            e.preventDefault()
            this.setState({count: this.state.count + 1})
        }
        handleDecreaseCount = (e)=> {
            e.preventDefault()
            this.setState({count: this.state.count - 1})
        }

    
    render() {
        return (
            <div>
                <div className='class'>
                <h1>Counter: {this.state.count}</h1>
                <hr/>
                <button onClick={this.handleIncreaseCount} className='button'>Increase</button>
                <button onClick={this.handleDecreaseCount} className='button'>Decrease</button>
                </div>
            </div>
        );
    }
}

export default ClassCounter;
