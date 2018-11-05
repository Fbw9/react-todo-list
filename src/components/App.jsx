import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import ToDoFilter from './ToDoFilter';
import base from '../base';
import firebase from 'firebase';
import uuid from "uuid";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: {},
            filter: 'all',
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
            state.toDoItems[id].text = newText;
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

    toggleToDoItem = (uuid) => {
        this.setState(state => {
            state.toDoItems[uuid].done = !state.toDoItems[uuid].done;
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

    setFilter = ( filter ) => {

        this.setState( state => {
            state.filter = filter;
           return state
        })
    };

    render() {
        return (
            <div className="container">
                <Header tagline="These are my bucket list items" />
                <ToDoForm addToDo={this.addToDo} />
                <ToDoFilter filterHandler={this.setFilter}
                            activeFilter={this.state.filter}/>
                <ToDoList   toDoItems={this.state.toDoItems}
                            updateToDoText={this.updateToDoText}
                            removeItem={this.removeItem}
                            toggleToDoItem={this.toggleToDoItem}
                            filter={this.state.filter}/>
            </div>
        )
    }
}

export default App;
