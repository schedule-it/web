import React, { Component } from 'react';
import { Input, DatePicker, Card, Button, Switch } from 'antd';
import { addSchedule, getAllSchedule } from '../../actions/schedule';
import * as moment from 'moment';
import '../../App.css';
const { TextArea } = Input;

class index extends Component {

  constructor() {
    super();
    this.state = {
      subject: '',
      dateAndTime: null,
      username: '',
      description: '',
      anyDestination: false,
      from: '',
      to: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.switchChange = this.switchChange.bind(this);
  }

  onChange(dateAndTime) {
    const dt = moment(dateAndTime).format('DD-MM-YYYY HH:mm');
    this.setState({ dateAndTime: dt })
  }

  switchChange(x) {
    this.setState({ anyDestination: x })
  }

  submit() {
    const { subject, dateAndTime, description, anyDestination, email, from, to } = this.state;
    const { username } = this.props
    this.props.addSchedule(subject, dateAndTime, description, anyDestination, from, to, username);
  }

  destination() {
    return (
      <div>
        <Input
          placeholder="From"
          style={{ width: '240px' }}
          onChange={event => this.setState({ from: event.target.value })} />
        <Input
          placeholder="To"
          style={{ width: '240px' }}
          onChange={event => this.setState({ to: event.target.value })} />
      </div>
    )
  }

  renderSchedule() {
    this.props.scheduleData.map((s, key) => {
      return (
        <div key={key}>
          {s.subject}
        </div>
      )
    })
  }

  render() {
    const mail = localStorage.getItem('email');
    const title = moment().format("YYYY-MM-DD HH:mm");
    return (
      <div className="App" style={{ padding: '2em' }}>
        <h1 className="App-intro">
        </h1>
        <Input
          placeholder="Subject"
          style={{ width: '240px' }}
          onChange={event => this.setState({ subject: event.target.value })} />
        <hr style={{ width: '50%' }} />
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm"
          placeholder="Select Date and Time"
          onChange={this.onChange} />
        <hr style={{ width: '50%' }} />
        <TextArea
          placeholder="Your Schedule Description"
          autosize={{ minRows: 2, maxRows: 6 }}
          style={{ width: '240px' }}
          onChange={event => this.setState({ description: event.target.value })} />
        <hr style={{ width: '50%' }} />
        Any Destination? <Switch
          checkedChildren="Yes"
          unCheckedChildren="No"
          onChange={this.switchChange} />
        <hr style={{ width: '50%' }} />
        {
          !this.state.anyDestination ?
            <div></div> :
            this.destination()
        }

        <br /><Button
          type="primary"
          onClick={this.submit}>Submit</Button>

      </div>

    );
  }
}

export default index;
