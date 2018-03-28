import React, { Component } from 'react';
import AddScheduleContainer from './containers/AddScheduleContainer';
import ViewSchedule from './components/ViewSchedule';
import { Button } from 'antd';
import { firebaseApp } from './config/firebase';

class App extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    firebaseApp.auth().signOut();
    this.props.history.push('/');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.reload();
  }

  render() {
    return (
      <div className="App" style={{ padding: '2em' }}>
        <Button onClick={this.logout}>
          Logout
        </Button>
        <AddScheduleContainer />
      </div>
    );
  }
}

export default App;
