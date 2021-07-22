import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Docs.scss';

export default class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bioinfoStatus: 'Loading...',
      biocoreStatus: 'Loading...',
      bioclusterStatus: 'Loading...'
    }
  }

  render() { 

    return (
      <Container fluid className="pt-3">
        <Row className="mt-3">
          <Col>
            <h1>Documentation</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
