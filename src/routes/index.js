import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import App from '../App';
import SignInContainer from '../containers/signInContainer';
import SignUpContainer from '../containers/signUpContainer';
import { firebaseApp } from '../config/firebase';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            errorSignup: false,
            successSignUp: false,
            token: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                errorSignup: nextProps.error,
                successSignUp: nextProps.success,
                token: nextProps.token
            })
            localStorage.setItem('token', nextProps.token)
        }
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        this.setState({ token })
    }

    render() {
        const { errorSignup, successSignUp, token } = this.state;
        console.log(token)
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" render={() => (
                            token === null ? (
                                <SignInContainer />
                            ) : (
                                    <Redirect to="/home" />
                                )
                        )} />
                        <Route path="/home" component={App} />
                        <Route path="/signup" component={SignUpContainer} />
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = ({ common }) => {
    return {
        token: common.token,
        success: common.success,
        error: common.error,
        errMessage: common.errMessage,
    }
}

export default connect(mapStateToProps)(index)