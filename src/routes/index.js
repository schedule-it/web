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
            token: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                token: nextProps.token
            })
        }
    }

    render() {
        const { token } = this.state;
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" render={() => (
                            token === null || token === undefined ? (
                                <SignInContainer />
                            ) : (
                                    <Redirect to="/home" />
                                )
                        )} />
                        <Route path="/home" component={App} />
                        <Route path="/signup" render={() => (
                            token === null || token === undefined ? (
                                <SignUpContainer />
                            ) : (
                                    <Redirect to="/home" />
                                )
                        )}/>
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