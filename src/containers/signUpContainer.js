import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { signUp } from '../actions/signUp';
import SignUp from '../components/SignUp';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <SignUp {...this.props} />
        )
        
    }
}

const mapStateToProps = ({ common }) => {
    return {
        successMessage: common.successMessage,
        success: common.success,
        errMessage: common.errMessage,
        error: common.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: bindActionCreators(signUp, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)