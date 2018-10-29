import React from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    render() {
        return(
            <div className="todo-list">
                <ul className="todo-items">
                {Object.keys(this.props.toDoItems).map(item =>
                    <ToDoItem item={this.props.toDoItems[item]} />
                )}
                </ul>
            </div>
        )
    }
}

export default ToDoList;