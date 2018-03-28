import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { firebaseApp } from '../config/firebase';

import { addSchedule, getAllSchedule } from '../actions/schedule';
import AddSchedule from '../components/AddSchedule';
import ViewSchedule from '../components/ViewSchedule'

class AddScheduleContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        firebaseApp.database().ref('schedule').on("value", snap => {
            let schedules = [];
            snap.forEach(schedule => {
                const { subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination } = schedule.val()
                const serverKey = schedule.key;
                schedules.push({
                    serverKey,
                    subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination
                })

            })
            this.props.getAllSchedule(schedules);
        })
    }

    render() {
        return (
            <div>
                <AddSchedule {...this.props} />

                <div>
                    <Row>
                        <Col span={12}><ViewSchedule {...this.props} /></Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                </div>
            </div>
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
        to: schedule.to,
        scheduleData: schedule.scheduleData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSchedule: bindActionCreators(addSchedule, dispatch),
        getAllSchedule: bindActionCreators(getAllSchedule, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleContainer)