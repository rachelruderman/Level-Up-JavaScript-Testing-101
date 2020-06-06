import React, { Component } from 'react'

export default class MovieForm extends Component {

    onSubmit = () => console.log('hi');

    render() {
        return (
            <form onSubmit={onSubmit}>
                <input type='text'/>
                <button>Submit</button>
            </form>
        )
    }
}
