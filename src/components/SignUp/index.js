import React, { Component } from 'react';
import { Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/signUp';
import './signup.css';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }

        this.signUp = this.signUp.bind(this);
        this.onclose = this.onclose.bind(this);
    }

    onclose(e) {

    }

    signUp() {
        this.props.signUp(this.state.email, this.state.password, this.state.username)
    }

    render() {
        const { errMessage, error, successMessage, success } = this.props;
        return (
        <div className="badansign">
            <div className="header">
                <h3>Schedule It</h3>
            </div>
            <div className="form1">
                {
                    error === true ?
                        <Alert
                            message={errMessage}
                            type="error"
                            closable
                            onClose={this.onclose}
                        />
                        :
                        success === true ?
                            <Alert
                                message={successMessage}
                                type="success"
                                closable
                                onClose={this.onclose}
                            />
                            :
                            <div>
                            </div>
                }
                <h1>Sign Up</h1>
                <Input
                    type="text"
                    placeholder="Your Username"
                    onChange={event => this.setState({ username: event.target.value })} />
                <Input
                    type="email"
                    placeholder="Your Email"
                    onChange={event => this.setState({ email: event.target.value })}
                    style={{ marginTop: 5 }} />
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

                <div style={{marginTop: '18px'}}>
                    <font color="white">Have an Account?</font> <Link to="/">Let's Login</Link>
                </div>
            </div>
            <div className="footer">
                <h3>Makes Your Day Better</h3>
            </div>
        </div>
        )
    }
}

export default index;