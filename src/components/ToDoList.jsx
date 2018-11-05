import React from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    filterItems = () => {
        const filtered = [];

        for (let id in this.props.toDoItems) {
            let item = this.props.toDoItems[id];

            if (this.props.filter === "all" || (this.props.filter === "done" && item.done === true) || (this.props.filter === "undone" && item.done === false)) {
                filtered.push(item);
            }
        }
        return filtered
    }
    
    render() {
        return (
            <div className="todo-list">
                <table className="todo-items table table-borderless">
                    <tbody>
                        {/* Convert object keys to be able to use filterItems function */}
                        {this.filterItems().map(item =>
                            <ToDoItem
                                key={`item-${item.uuid}`}
                                item={item}
                                updateToDoText={this.props.updateToDoText}
                                removeItem={this.props.removeItem}
                                toggleToDoItem={this.props.toggleToDoItem}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDoList;