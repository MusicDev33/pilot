import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home/Home';
import PNavbar from 'components/PNavbar/PNavbar';
import AttentionItemsBar from 'components/AttentionItemsBar/AttentionItemsBar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter
} from 'react-router-dom';

import env from 'react-dotenv';

export default class PContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      baseUrlLen: env.BASE_URL.split('/').length
    }
  }

  render() {
    return (
      <Router>
        <Container fluid className="App px-0">
          <Row>
            <Col sm={2}>
              <PNavbar />
            </Col>
            <Col>
              <Home />
              <Switch>
                <Route path={`${env.BASE_URL}/home`}>

                </Route>
              </Switch>
            </Col>

            <Col sm={3}>
              <AttentionItemsBar />
            </Col>
          </Row>
        </Container>
      </Router>);
  }
}
