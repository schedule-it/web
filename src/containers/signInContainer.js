import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { signIn } from '../actions/signIn';
import Login from '../components/Login';

class SignInContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Login {...this.props} />
        )

    }
}

const mapStateToProps = ({ signIn }) => {
    return {
        email: signIn.email,
        password: signIn.password,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: bindActionCreators(signIn, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)