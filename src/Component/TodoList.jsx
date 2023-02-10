import React from 'react';
import TodoItems from './TodoItems';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            items : []
        };
    }
    handleAddItem(name) {
        console.log("TodoList handleAddItem", name);
        const newItems = this.state.items.concat({name:name, done:false});
        this.setState({items: newItems});
    }
    handleToggleDone(item) {
        // console.log("TodoList handleAddItem",name);
        const newItems = this.state.items.slice();
        newItems[newItems.indexOf(item)].done = !item.done;
        
        this.setState({items:newItems});
    }
    render() {
        // const items = [
        //     { name:'First item', done:false},
        //     { name:'Second item', done:true},
        //     { name:'Third item', done:false}
        // ];

        return ( 
            <div>
                <ul>
                    { this.state.items.map(item => <TodoItems name={item.name} done={item.done} onToggleDone={this.handleToggleDone.bind(this, item)}/>)}
                </ul>
                <TodoInput onAddItem={this.handleAddItem.bind(this)} />
            </div>
        );
    }
}

export default TodoList;