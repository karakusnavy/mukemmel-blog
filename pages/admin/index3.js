import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom'
import Dashboard from './dashboard'
import { createBrowserHistory } from 'history'
import PrivateRoute from '../../components/hoc/PrivateRoute'

export default class Index extends React.Component {
    render() {
        return (
            <div className="App">

                <Router history={createBrowserHistory()} >
                    <Switch>
                        <PrivateRoute path="/" exact component={Dashboard} />
                    </Switch>
                </Router>

            </div>
        )
    }
}
