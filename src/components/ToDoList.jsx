import React from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <table className="todo-items table table-borderless">
                    <tbody>
                        {Object.keys(this.props.toDoItems).map(item =>
                            <ToDoItem item={this.props.toDoItems[item]}
                            updateToDoText={this.props.updateToDoText} 
                            removeItem={this.props.removeItem}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDoList;