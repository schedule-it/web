import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import App from '../App';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export default class index extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                    </div>
                </Router>
            </div>
        )
    }
}