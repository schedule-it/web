import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { signUp } from '../../actions/signUp';
import './signup.css';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.signUp = this.signUp.bind(this);
    }

    signUp() {
        this.props.signUp(this.state.email, this.state.password)
    }

    render() {
        return (
            <div className="form">
                <h1>Sign Up</h1>
                <Input
                    type="email"
                    placeholder="Your Email"
                    onChange={event => this.setState({ email: event.target.value })} />
                <Input
                    type="password"
                    placeholder="Your Password"
                    onChange={event => this.setState({ password: event.target.value })}
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