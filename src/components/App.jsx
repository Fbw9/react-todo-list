import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import uuid from "uuid"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoItems: {}
        }
    }
    addToDo = text => {
        const todo = {
            uuid: uuid(),
            text: text,
            done: false
        };
        this.setState( state => {
            state.toDoItems[todo.uuid] = todo;
            return state
        })
    };
    updateToDoText = ( id, newText ) => {
        this.setState( state => {
            state.toDoItems[id].text = newText;
            return state
        })
    };
    removeItem = id => {
        this.setState( state => {
            delete state.toDoItems[id];
            return state
        })
    };

    render() {
        return (
            <div className="container">
                <Header tagline="These are my bucket list items" />
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList listItems={this.state.toDoItems}
                          updateHandler={this.updateToDoText}
                          removeHandler={this.removeItem}/>
            </div>
        )
    }
}

export default App;
