import React from 'react';
import ToDoItems from "./ToDoItems";

class ToDoList extends React.Component {

    render() {

        return(
            <div className="todo-list">
                <table className={'todo-items table table-bordderless'}>
                    <tbody>
                    {Object.keys(this.props.listItems).map( item =>
                        <ToDoItems key={`${this.props.listItems[item].uuid}`}
                                   item={this.props.listItems[item]}
                                   updateInput={this.props.updateHandler}
                                   deleteItem={this.props.removeHandler}/>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDoList;