import React from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    filterItems = () => {

        //Result of an array of filter items
    }
    render() {
        return (
            <div className="todo-list">
                <table className="todo-items table table-borderless">
                    <tbody>
                        {/* Convert object keys to be able to use filterItems function */}
                        {Object.keys(this.props.toDoItems).map(item =>
                            <ToDoItem
                                key={`item-${item}`}
                                item={this.props.toDoItems[item]}
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