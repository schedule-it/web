import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addSchedule } from '../actions/schedule';
import AddSchedule from '../components/AddSchedule';

class AddScheduleContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AddSchedule {...this.props} />
        )

    }
}

const mapStateToProps = ({ schedule }) => {
    return {
        subject: schedule.subject,
        dateAndTime: schedule.dateAndTime,
        description: schedule.description,
        anyDestination: schedule.anyDestination,
        from: schedule.from,
        to: schedule.to
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSchedule: bindActionCreators(addSchedule, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleContainer)