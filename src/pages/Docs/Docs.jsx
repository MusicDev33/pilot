import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactMarkdown from 'react-markdown';

import * as DocFiles from './export';

import './Docs.scss';

export default class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bioinfoStatus: 'Loading...',
      biocoreStatus: 'Loading...',
      bioclusterStatus: 'Loading...',
      doc: 'kbldb'
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

        <Row className="p-card mt-4 py-3 mb-5">
          <Col>
            <Row className="mb-3">
              <Col>
                <h4>Services</h4>
              </Col>
            </Row>

            <Row>
              <Col sm={3}>
                <div className="doc-item" onClick={() => {
                  this.setState({doc: 'kbldb'})
                }}>
                  KBLDB
                </div>
              </Col>
              <Col sm={3}>
                <div className="doc-item">
                  Boxidizer
                </div>
              </Col>
              <Col sm={3}>
                <div className="doc-item">
                  Toxel
                </div>
              </Col>
              <Col sm={3}>
                <div className="doc-item">
                  Raikou
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className='doc-text'>
            {DocFiles[this.state.doc]()}
          </Col>
        </Row>
      </Container>
    );
  }
}
