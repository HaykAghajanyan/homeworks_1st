import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div className='todoItem'>
                {this.props.post}
            </div>
        )
    }
}
