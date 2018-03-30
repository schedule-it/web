import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { textSplit } from '../../helper';
import { deleteAllCompletedSchedule } from '../../actions/schedule';


export default class index extends Component {

    constructor(props) {
        super(props);
        this.deleteAll = this.deleteAll.bind(this);
    }

    deleteAll() {
        const { username } = this.props;
        deleteAllCompletedSchedule(username);
    }

    render() {
        const completedSchedule = this.props.completedScheduleData;
        return (
            <div>
                <div style={{marginTop: '10px'}}>
                    <Row>
                        <Col span={24} pull={9}>
                            <Button type="danger" onClick={this.deleteAll} >Delete All Data</Button>
                        </Col>
                    </Row>
                </div>
                {
                    completedSchedule.map((cs) => {
                        return (
                            <div key={cs.serverKey}>
                                <Card title={cs.subject} style={{ marginTop: 10 }} >
                                    Date and Time: {cs.dateAndTime}<br />
                                    description: {cs.description}<br />
                                    Any Destination? {
                                        cs.anyDestination === true ?
                                            <p>Yes &#128526;</p>
                                            :
                                            <p>No &#128533;</p>
                                    }
                                    {
                                        cs.anyDestination === true ?
                                            <div>
                                                Destination: from {textSplit(cs.origin)} to {textSplit(cs.destination)}
                                            </div>
                                            :
                                            <div>
                                            </div>
                                    }
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}