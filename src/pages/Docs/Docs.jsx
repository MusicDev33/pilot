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
      doc: 'backups',
      category: 'processes'
    }

  }

  render() { 

    return (
      <Container fluid className="pt-3">

        <Row className="mt-3 px-4">
          <Col className="text-center">
            <Row className="mb-3">
              <Col>
                <h4 className={"doc-category " + (this.state.category === 'services' ? 'selected' : '')} 
                  onClick={() => {this.setState({category: 'services'})}}>Services</h4>
              </Col>
            </Row>
          </Col>

          <Col className="text-center">
            <Row className="mb-3">
              <Col>
                <h4 className={"doc-category " + (this.state.category === 'processes' ? 'selected' : '')} 
                  onClick={() => {this.setState({category: 'processes'})}}>Admin</h4>
              </Col>
            </Row>
          </Col>

          <Col className="text-center">
            <Row className="mb-3">
              <Col>
                <h4 className={"doc-category " + (this.state.category === 'troubleshoot' ? 'selected' : '')} 
                  onClick={() => {this.setState({category: 'troubleshoot'})}}>Troubleshoot</h4>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={"p-card py-3 mb-5 " + (this.state.category === "services" ? '' : 'd-none')}>
          <Col>
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

        <Row className={"p-card py-3 mb-5 " + (this.state.category === "processes" ? '' : 'd-none')}>
          <Col>
            <Row>
              <Col>
                <div className={"doc-item " + (this.state.doc === 'backups' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'backups'})
                }}>
                  Backups
                </div>
              </Col>
              <Col>
                <div className={"doc-item " + (this.state.doc === 'nodes' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'nodes'})
                }}>
                  Nodes
                </div>
              </Col>
              <Col>
                <div className={"doc-item " + (this.state.doc === 'modules' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'modules'})
                }}>
                  Modules
                </div>
              </Col>
              <Col>
                <div className={"doc-item " + (this.state.doc === 'databases' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'databases'})
                }}>
                  Databases
                </div>
              </Col>
              <Col>
                <div className={"doc-item " + (this.state.doc === 'vms' ? 'active' : '')} onClick={() => {
                  this.setState({doc: 'vms'})
                }}>
                  VMs
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
