import React from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { getRandomTagline } from '../helpers';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header tagline={getRandomTagline()} />
                <ToDoForm />
                <ToDoList />
            </div>
        )
    }
}

export default App;
