import React, { Component } from 'react';
import logo from './logo.svg';
import { Input, DatePicker, Card, Button, Switch } from 'antd';
import * as moment from 'moment';
import './App.css';

const { TextArea } = Input;

class App extends Component {

  constructor() {
    super();
    this.state = {
      subject: '',
      dateAndTime: null,
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
    const dt = moment(dateAndTime).format('x');
    this.setState({ dateAndTime: dt })
    console.log(dt);
  }
  switchChange(x) {
    this.setState({ anyDestination: x })
  }
  submit() {
    const { subject, dateAndTime, description } = this.state;
    console.log(subject, dateAndTime, description);
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
  render() {
    
    const title = moment().format("YYYY-MM-DD HH:mm");
    return (
      <div className="App" style={{ padding: '2em' }}>
        <h1 className="App-intro">
          It's just prototype, don't expect too much :)
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
        {/* <hr style={{ width: '50%' }} /> */}
        <br /><Button
          type="primary"
          onClick={this.submit}>Submit</Button>

        <hr style={{ width: '50%' }} />

        <Card title={`Your Schedule on ${title}`}>
          Subject: Hangout<br />
          Date and Time: {moment().format("YYYY-MM-DD HH:mm")}<br />
          Description: Hangout with ma hunny bunny *kiss**kiss**hug**hug*<br />
          Destination: <a href="https://www.google.com/maps/dir/?api=1&origin=mercu+buana+jakarta&destination=pondok+indah+mall&travelmode=driving" 
          target="_blank" rel="noopener noreferrer">From Mercu Buana Jakarta to Pondok Indah Mall</a>
        </Card>
      </div>

    );
  }
}

export default App;
