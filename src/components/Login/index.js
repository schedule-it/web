import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { signIn } from '../../actions/signIn';
import './login.css';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }

        this.signIn = this.signIn.bind(this);
    }

    signIn() {
        this.props.signIn(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="form">
                <h1>Sign In</h1>
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
                    onClick={this.signIn}
                    style={{ marginTop: 5 }}>
                    Login
                </Button>
            </div>
        )
    }
}

export default index;