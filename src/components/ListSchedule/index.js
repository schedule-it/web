import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { completeSchedule } from '../../actions/schedule';
import { textSplit } from '../../helper/';
import * as moment from 'moment';


export default class index extends Component {

    constructor(props) {
        super(props);

        this.completedSchedule = this.completedSchedule.bind(this);
    }

    completedSchedule() {
        const { subject, dateAndTime, description, anyDestination, origin, destination, serverKey, username } = this.props.list;
        completeSchedule(subject, dateAndTime, description, anyDestination, origin, destination, serverKey, username)
    }

    render() {
        const schedule = this.props.list;
        console.log(schedule);
        return (
            <div>
                <Card title={schedule.subject} style={{ marginTop: 10 }}>
                    Date and Time: {schedule.dateAndTime}<br />
                    description: {schedule.description}<br />
                    Destination: <a href={`https://www.google.com/maps/dir/?api=1&origin=${schedule.origin}
                                    &destination=${schedule.destination}&travelmode=driving`} target="_blank">from {textSplit(schedule.origin)} to {textSplit(schedule.destination)}</a><br />
                    <Button type="primary" onClick={this.completedSchedule} >Complete</Button>

                </Card>
            </div>
        )
    }
}
