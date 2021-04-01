import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home/Home';

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
      tissueResults: [],
      baseUrlLen: env.BASE_URL.split('/').length
    }

    this.getTissueData = this.getTissueData.bind(this);
    console.log(`Env: ${env.BASE_URL}`);
  }

  getTissueData(data) {
    console.log(data);
    window.history.replaceState(null, 'Test', '/tissue');
  }

  render() {
    return (
      <Router>
        <Container fluid className="App px-0">
          <Home />
          <Switch>
            <Route path={`${env.BASE_URL}/home`}>

            </Route>
          </Switch>
        </Container>
      </Router>);
  }
}
