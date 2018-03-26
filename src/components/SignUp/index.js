import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { signUp } from '../../actions/signUp';
import store from '../../store';
import './signup.css';

class index extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.signUp = this.signUp.bind(this);
    }

    signUp() {
        // signUp(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="form">
                <Input
                    type="email"
                    placeholder="Your Email"
                    onChange={event => this.setState({ email: event.target.value })} />
                <Input
                    type="password"
                    placeholder="Your Password"
                    onChange={event => this.setState({ password: event.target.value })}
                    style={{ marginTop: 5 }} />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={event => this.setState({ confirmPassword: event.target.value })}
                    style={{ marginTop: 5 }} />
                <Button
                    onClick={this.signUp}
                    style={{ marginTop: 5 }}>
                    Sign Up
                </Button>
            </div>
        )
    }
}

export default index;