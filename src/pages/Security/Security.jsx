import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Security.scss';

export default class Security extends Component {
  

  constructor() {
    super();

    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <Container fluid className="pt-3">
        <Row className="mt-3">
          <Col>
            <h1>Security</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}
