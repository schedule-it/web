import React, { Component } from 'react';
import { Card } from 'antd';
import { textSplit } from '../../helper/'
import * as moment from 'moment';


export default class index extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const scheduleData = this.props.scheduleData;
        return (
            <div>
                {
                    scheduleData.map((schedule) => {
                        return (
                            <div key={schedule.serverKey}>
                                <Card title={schedule.subject} style={{marginTop: 10}}>
                                    Date and Time: {schedule.dateAndTime}<br />
                                    description: {schedule.description}<br />
                                    Destination: <a href={`https://www.google.com/maps/dir/?api=1&origin=${schedule.origin}
                                    &destination=${schedule.destination}&travelmode=driving`} target="_blank">from {textSplit(schedule.origin)} to {textSplit(schedule.destination)}</a>
                                </Card>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
