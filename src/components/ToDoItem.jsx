import React from 'react';

class ToDoItem extends React.Component {
   
    render() {
        const { item } = this.props
        return(
            <div className="todo-item">
                {item.uuid} | {item.text}
            </div>
        )
    }
}

export default ToDoItem;