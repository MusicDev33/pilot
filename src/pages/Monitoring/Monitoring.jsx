import React, { Component } from 'react';
import { FaRedo } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as Uptime from 'services/uptime/uptime';

import './Monitoring.scss';

const classDict = {
  'Loading...': 'loading',
  'Online': 'online',
  'Offline': 'offline'
}

export default class Monitoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bioinfoStatus: 'Loading...',
      biocoreStatus: 'Loading...',
      bioclusterStatus: 'Loading...',
      rstudio: {id: 'rstudio', name: 'RStudio', status: 'Loading...'},
      ganglia: {id: 'ganglia', name: 'Ganglia', status: 'Loading...'},
      rkfe: {id: 'rkfe', name: 'Raikou Frontend', status: 'Loading...'},
      raikou: {id: 'raikou', name: 'Raikou', status: 'Loading...'}
    }
  }

  // Maybe there's a better way to do this...
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

    const rstudio = JSON.parse(JSON.stringify(this.state.rstudio));
    Uptime.getServiceUp('rstudio')
      .then(res => {
        rstudio.status = 'Online';
        this.setState({rstudio});
      })
      .catch(err => {
        if (err.message && err.message.includes('404')) {
          rstudio.status = 'Offline';
        } else {
          rstudio.status = 'Online';
        }
        this.setState({rstudio});
      })

    const ganglia = JSON.parse(JSON.stringify(this.state.ganglia));
    Uptime.getServiceUp('ganglia')
      .then(res => {
        ganglia.status = 'Online';
        this.setState({ganglia});
      })
      .catch(err => {
        ganglia.status = 'Offline';
        this.setState({ganglia});
      })

    const rkfe = JSON.parse(JSON.stringify(this.state.rkfe));
    Uptime.getServiceUp('rkfe')
      .then(res => {
        rkfe.status = 'Online';
        this.setState({rkfe});
      })
      .catch(err => {
        rkfe.status = 'Offline';
        this.setState({rkfe});
      })

    const raikou = JSON.parse(JSON.stringify(this.state.raikou));
    Uptime.getServiceUp('raikou')
      .then(res => {
        raikou.status = 'Online';
        this.setState({raikou});
      })
      .catch(err => {
        raikou.status = 'Offline';
        this.setState({raikou});
      })
  }

  render() {
    const services = [this.state.rstudio, this.state.ganglia, this.state.rkfe, this.state.raikou];

    return (
      <Container fluid className="pt-3">
        <Row className="mt-3">
          <Col>
            <h1>Monitoring</h1>
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

        <Row className="mt-2">
          {services.map(service => (
            <Col sm={3}>
              <div className="service-data p-3">
                <div className="title">{service.name}</div>
                <div className="site-status">Status: <span className={classDict[service.status]}>{service.status}</span></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}