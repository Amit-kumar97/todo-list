import React from 'react';

class TodoItems extends React.Component {
    render() {
        return <li style={{
            textDecoration: this.props.done ? 'line-through':'none'
        }}>{this.props.name}<a href='#' onClick={this.props.onToggleDone}>{this.props.done ? 'Mark as not done':'Mark as done'}</a></li>
    }
}

export default TodoItems;