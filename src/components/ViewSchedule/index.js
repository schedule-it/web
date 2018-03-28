import React, { Component } from 'react';
import ListSchedule from '../ListSchedule';

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
                            <ListSchedule key={schedule.serverKey} list={schedule} />
                        )
                    })
                }

            </div>
        )
    }
}
