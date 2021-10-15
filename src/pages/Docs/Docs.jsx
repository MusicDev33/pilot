import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as DocFiles from './export';

import './Docs.scss';

export default class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bioinfoStatus: 'Loading...',
      biocoreStatus: 'Loading...',
      bioclusterStatus: 'Loading...',
      doc: 'raikou'
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
                <div className={"doc-item " + (this.state.doc === 'kbldb' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'kbldb'})
                }}>
                  KBLDB
                </div>
              </Col>
              <Col sm={3}>
                <div className={"doc-item " + (this.state.doc === 'boxidizer' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'boxidizer'})
                }}>
                  Boxidizer
                </div>
              </Col>
              <Col sm={3}>
                <div className={"doc-item " + (this.state.doc === 'toxel' ? 'active' : '')}>
                  Toxel
                </div>
              </Col>
              <Col sm={3}>
                <div className={"doc-item " + (this.state.doc === 'raikou' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'raikou'})
                }}>
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
