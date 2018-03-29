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
        this.state = {
            username: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.username !== nextProps.username) {
            this.getSchedule(nextProps.username);
            this.getCompletedSchedule(nextProps.username);
        } 
        
    }

    getSchedule(username) {

        return this.props.getAllSchedule(username)
    }

    getCompletedSchedule(username){
        return this.props.getAllCompletedSchedule(username)
    }

    render() {
        if (!this.props) {
            return <div></div>
        } else {

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
}

const mapStateToProps = ({ schedule, common }) => {
    return {
        scheduleData: schedule.scheduleData,
        completedScheduleData: schedule.completedScheduleData,
        username: common.username
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