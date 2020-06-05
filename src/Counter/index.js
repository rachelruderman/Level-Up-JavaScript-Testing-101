import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: 0
    }

    onClick = () => this.setState((prevState) => ({
        count: prevState.count + 1
    }));

    render() {
        const { count } = this.state;
        return (
            <div>
                <button data-testid='counter-button' onClick={this.onClick}>
                    {count}
                </button>
            </div>
        )
    }
}
