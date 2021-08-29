import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <>
                <button onClick={this.addCount}>Count</button>
                <div>
                    {this.state.count}
                </div>
            </>
        )
    }
}

export default Counter;