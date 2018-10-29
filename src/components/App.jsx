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
        }
        this.setState(state => {
            state.toDoItems[todo.uuid] = todo;
            return state
        })
    }

    render() {
        return (
            <div className="container">
                <Header tagline="These are my bucket list items" />
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList />
            </div>
        )
    }
}

export default App;
