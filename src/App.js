import React, { Component } from 'react';
import AddScheduleContainer from './containers/AddScheduleContainer';
import ViewSchedule from './components/ViewSchedule';
import { Button, Layout, Row, Col } from 'antd';
import { firebaseApp } from './config/firebase';

const { Header, Content } = Layout;

class App extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    firebaseApp.auth().signOut();
    this.props.history.push('/');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Row>
              <Col span={16} pull={6}>
                <h2 style={{color: 'white'}}>Schedule It</h2>
              </Col>
              <Col span={8} push={3}>
                <Button onClick={this.logout}>
                  Logout
              </Button>
              </Col>
            </Row>
          </Header>
          <Content>
            <AddScheduleContainer />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
