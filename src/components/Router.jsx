import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Help from './Help';
import NotFound from './NotFound';

class Router extends React.Component {
    render() {
       return(
       <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
       )
    }
}

export default Router;