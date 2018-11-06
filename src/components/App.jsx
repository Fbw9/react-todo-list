import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import ToDoFilter from './ToDoFilter'
import uuid from "uuid";
import base from "../base";
import firebase from 'firebase'

class App extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            toDoItems: {},
            filter: "undone"
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

    componentWillMount() {
        this.toDoItemRef = base.syncState("todo-list-items", {
            context: this,
            state: "toDoItems"
        } )
    }

    componentWillUnmount() {
        base.removeBinding(this.toDoItemRef)
    }

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
        firebase.database().ref(`todo-list-items/${id}`).remove()
    }
    toggleToDoItem = (uuid, event) => {
        const checkbox = event.target;
        this.setState(state => {
            state.toDoItems[uuid].done = checkbox.checked;
            return state;
        })
    };

    setFilter = filter => {
        this.setState(state => {
            state.filter = filter
            return state
        })
    }

    render() {
        return (
            <div className="container">
                <Header tagline="These are my bucket list items" />
                <ToDoForm addToDo={this.addToDo} />
                <ToDoFilter setFilter={this.setFilter} activeFilter={this.state.filter} />
                <ToDoList toDoItems={this.state.toDoItems} 
                filter={this.state.filter}
                updateToDoText={this.updateToDoText} 
                removeItem={this.removeItem}
                toggleToDoItem={this.toggleToDoItem} />
            </div>
        )
    }
}

export default App;
