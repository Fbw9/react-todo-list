import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import base from '../base';
import firebase from 'firebase';
import uuid from "uuid";


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
        this.setState(state => {
            state.toDoItems[todo.uuid] = todo;
            return state
        })
    };

    updateToDoText = (id, newText) => {
        this.setState(state => {
            state.toDoItems[id].text = newText
            return state
        })
    };

    removeItem = id => {
        this.setState(state => {
            delete state.toDoItems[id];
            return state;
        });
        firebase.database().ref(`todo-list/${id}`).remove();
    };

    toggleToDoItem = (uuid, event) => {
        const checkbox = event.target;
        this.setState(state => {
            state.toDoItems[uuid].done = checkbox.checked;
            return state;
        })
    };

    componentDidMount() {
        this.toDoItemRef = base.syncState('todo-list', {
            context: this,
            state: 'toDoItems'
        })
    }
    componentWillUnmount() {
        base.removeBinding(this.toDoItemRef);
    };

    render() {
        return (
            <div className="container">
                <Header tagline="These are my bucket list items" />
                <ToDoForm addToDo={this.addToDo} />
                <ToDoList toDoItems={this.state.toDoItems} 
                updateToDoText={this.updateToDoText} 
                removeItem={this.removeItem}
                toggleToDoItem={this.toggleToDoItem} />
            </div>
        )
    }
}

export default App;
