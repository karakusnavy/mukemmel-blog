import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './dashboard';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/admin/dashboard" component={App} />
            <Route path="/admin/panel" component={App} />
        </div>
    </Router>
)

ReactDOM.render(routing);
