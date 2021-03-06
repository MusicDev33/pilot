import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Home from './pages/Home/Home';
import Monitoring from './pages/Monitoring/Monitoring';
import Docs from './pages/Docs/Docs';
import Data from './pages/Data/Data';
import Security from './pages/Security/Security';

import PNavbar from 'components/PNavbar/PNavbar';
import AttentionItemsBar from 'components/AttentionItemsBar/AttentionItemsBar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  BrowserRouter as Router,
  Switch,
  Route
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
            <Col sm={2} className="pe-0">
              <PNavbar />
            </Col>
            <Col className="content-container">
              <Switch>
                <Route path={`${env.BASE_URL}/home`}>
                  <Home />
                </Route>

                <Route path={`${env.BASE_URL}/monitoring`}>
                  <Monitoring />
                </Route>

                <Route path={`${env.BASE_URL}/data`}>
                  <Data />
                </Route>

                <Route path={`${env.BASE_URL}/security`}>
                  <Security />
                </Route>

                <Route path={`${env.BASE_URL}/docs`}>
                  <Docs />
                </Route>
              </Switch>
            </Col>

            <Col sm={3} className="ps-0">
              <AttentionItemsBar />
            </Col>
          </Row>
        </Container>
      </Router>);
  }
}
