import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaRedo } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import * as Uptime from 'services/uptime/uptime';

import './Docs.scss';

const classDict = {
  'Loading...': 'loading',
  'Online': 'online',
  'Offline': 'offline'
}

export default class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bioinfoStatus: 'Loading...',
      biocoreStatus: 'Loading...',
      bioclusterStatus: 'Loading...'
    }
  }

  componentDidMount() {
    Uptime.getBioinfoUp()
      .then(response => {
        this.setState({bioinfoStatus: 'Online'});
      })
      .catch(e => {
        this.setState({bioinfoStatus: 'Offline'});
      });

    Uptime.getBiocoreUp()
      .then(response => {
        this.setState({biocoreStatus: 'Online'});
      })
      .catch(e => {
        this.setState({biocoreStatus: 'Offline'});
      });

    Uptime.getBioclusterUp()
      .then(response => {
        this.setState({bioclusterStatus: 'Online'});
      })
      .catch(e => {
        this.setState({bioclusterStatus: 'Offline'});
      });
  }

  render() { 

    return (
      <Container fluid className="pt-3">
        <Row className="mt-3">
          <Col>
            <h1>Documentation</h1>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h3>Web</h3>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <div className="p-card px-4 py-3">
              <h4>Bioinfo</h4>
              <div className="site-status">
                Status: <span className={classDict[this.state.bioinfoStatus]}>{this.state.bioinfoStatus}</span>
              </div>
              <div class="mt-3 action-bar">
                <IconContext.Provider value={{ className: "action-icon" }}>
                  <FaRedo />
                </IconContext.Provider>
              </div>
            </div>
          </Col>

          <Col>
            <div className="p-card px-4 py-3">
              <h4>Biocore</h4>
              <div className="site-status">
                Status: <span className={classDict[this.state.biocoreStatus]}>{this.state.biocoreStatus}</span>
              </div>
              <div class="mt-3 action-bar">
                <IconContext.Provider value={{ className: "action-icon" }}>
                  <FaRedo />
                </IconContext.Provider>
              </div>
            </div>
          </Col>

          <Col>
            <div className="p-card px-4 py-3">
              <h4>Biocluster</h4>
              <div className="site-status">
                Status: <span className={classDict[this.state.bioclusterStatus]}>{this.state.bioclusterStatus}</span>
              </div>
              <div class="mt-3 action-bar">
                <IconContext.Provider value={{ className: "action-icon" }}>
                  <FaRedo />
                </IconContext.Provider>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h3>Web Vitals</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
