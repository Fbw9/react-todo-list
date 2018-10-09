import React from 'react';
import Header from './Header';

class Help extends React.Component {
    componentDidMount() {
        document.title = "FAQ Page"
    }
    
    render() {
        return(
            <div className="container">
                <Header tagline="What questions do you have?"/>
                <ul>
                    <li>Where is my data being stored?</li>
                    <li>What if I don't fulfill all my tasks on the todo list?</li>
                </ul>
            </div>
        )
    }
}

export default Help;