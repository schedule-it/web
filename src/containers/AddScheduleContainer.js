import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { firebaseApp } from '../config/firebase';

import { addSchedule, getAllSchedule, completeSchedule, getAllCompletedSchedule } from '../actions/schedule';
import AddSchedule from '../components/AddSchedule';
import ViewSchedule from '../components/ViewSchedule';
import CompletedSchedule from '../components/CompletedSchedule';

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

        firebaseApp.database().ref('completedSchedule').on("value", snap => {
            let completedSchedules = [];
            snap.forEach(completedSchedule => {
                const { subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination } = completedSchedule.val()
                const serverKey = completedSchedule.key;
                completedSchedules.push({
                    serverKey,
                    subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination
                })

            })
            this.props.getAllCompletedSchedule(completedSchedules);
        })
    }

    render() {
        return (
            <div>
                <AddSchedule {...this.props} />

                <div>
                    <Row>
                        <Col span={12}><ViewSchedule {...this.props} /></Col>
                        <Col span={12}><CompletedSchedule {...this.props} /></Col>
                    </Row>
                </div>
            </div>
        )

    }
}

const mapStateToProps = ({ schedule }) => {
    return {
        scheduleData: schedule.scheduleData,
        completedScheduleData: schedule.completedScheduleData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSchedule: bindActionCreators(addSchedule, dispatch),
        getAllSchedule: bindActionCreators(getAllSchedule, dispatch),
        completeSchedule: bindActionCreators(completeSchedule, dispatch),
        getAllCompletedSchedule: bindActionCreators(getAllCompletedSchedule, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleContainer)