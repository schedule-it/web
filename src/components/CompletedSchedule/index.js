import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { textSplit } from '../../helper';
import { deleteAllCompletedSchedule } from '../../actions/schedule';


export default class index extends Component {

    constructor(props) {
        super(props);
        this.deleteAll = this.deleteAll.bind(this);
    }

    deleteAll(){
        deleteAllCompletedSchedule();
    }

    render() {
        const completedSchedule = this.props.completedScheduleData;
        return (
            <div>
                <Button type="danger" onClick={this.deleteAll} >Delete All Data</Button>
                {
                    completedSchedule.map((cs) => {
                        return (
                            <div key={cs.serverKey}>
                                <Card title={cs.subject} style={{ marginTop: 10 }} >
                                    Date and Time: {cs.dateAndTime}<br />
                                    description: {cs.description}<br />
                                    Destination: <a href={`https://www.google.com/maps/dir/?api=1&origin=${cs.origin}
                                    &destination=${cs.destination}&travelmode=driving`} target="_blank">from {textSplit(cs.origin)} to {textSplit(cs.destination)} </a><br />
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}