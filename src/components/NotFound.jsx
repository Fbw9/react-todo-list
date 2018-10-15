import React from 'react';
import Header from './Header';

class NotFound extends React.Component {
    componentDidMount() {
        document.title = "404 Error Page"
    }
    render() {
        return(
            <div className="container">
                <Header tagline="404 - Sorry! Page not found" />
                <div className="alert alert-danger">
                    <p><strong>Please navigate to another page</strong></p>
                </div>
            </div>
        )
    }
}

export default NotFound;
