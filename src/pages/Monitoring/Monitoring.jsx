import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as Uptime from 'services/uptime/uptime';
import * as WebManage from 'services/manage/manage';

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
      raikou: {id: 'raikou', name: 'Raikou', status: 'Loading...'},
      bioinfoLoading: false,
      biocoreLoading: false,
      bioclusterLoading: false,
      nodeStatuses: [
        {"node":"chela01","status":"Loading"},
        {"node":"chela02","status":"Loading"},
        {"node":"chela03","status":"Loading"},
        {"node":"chela04","status":"Loading"},
        {"node":"chela05","status":"Loading"},
        {"node":"chela-g01","status":"Loading"}
      ]
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

    Uptime.getNodeStatuses()
      .then(response => {
        this.setState({nodeStatuses: response.data.payload});
      })
      .catch(e => {
        this.setState({nodeStatuses: [
          {"node":"chela01","status":"Offline"},
          {"node":"chela02","status":"Offline"},
          {"node":"chela03","status":"Offline"},
          {"node":"chela04","status":"Offline"},
          {"node":"chela05","status":"Offline"},
          {"node":"chela-g01","status":"Offline"}
        ]});
      })

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

    let binfoUpdateButton = (
      <button className="p-btn-1 w-100" onClick={() => {
        this.setState({bioinfoLoading: true});
        WebManage.updateSite('bioinformatics')
          .then(res => {
            console.log(res.data);
            this.setState({bioinfoLoading: false});
          })
          .catch(e => {
            this.setState({bioinfoLoading: false});
          })
      }}>Update</button>
    );

    let biocoreUpdateButton = (
      <button className="p-btn-1 w-100" onClick={() => {
        this.setState({biocoreLoading: true});
        WebManage.updateSite('bioinfocore')
          .then(res => {
            console.log(res.data);
            this.setState({biocoreLoading: false});
          })
          .catch(e => {
            this.setState({biocoreLoading: false});
          })
      }}>Update</button>
    );

    let bioclusterUpdateButton = (
      <button className="p-btn-1 w-100" onClick={() => {
        this.setState({bioclusterLoading: true});
        WebManage.updateSite('biocluster')
          .then(res => {
            console.log(res.data);
            this.setState({bioclusterLoading: false});
          })
          .catch(e => {
            this.setState({bioclusterLoading: false});
          })
      }}>Update</button>
    );

    if (this.state.bioinfoLoading) {
      binfoUpdateButton = <div class="loader"></div>;
    }

    if (this.state.biocoreLoading) {
      biocoreUpdateButton = <div class="loader"></div>;
    }

    if (this.state.bioclusterLoading) {
      biocoreUpdateButton = <div class="loader"></div>;
    }

    return (
      <Container fluid className="pt-3">

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
              <Row className="mt-3">
                <Col sm={6}>
                  <button className="p-btn-1 disabled w-100">Start</button>
                </Col>
                <Col sm={6}>
                  {binfoUpdateButton}
                </Col>
              </Row>
            </div>
          </Col>

          <Col>
            <div className="p-card px-4 py-3">
              <h4>Biocore</h4>
              <div className="site-status">
                Status: <span className={classDict[this.state.biocoreStatus]}>{this.state.biocoreStatus}</span>
              </div>
              <Row className="mt-3">
                <Col sm={6}>
                  <button className="p-btn-1 disabled w-100">Start</button>
                </Col>
                <Col sm={6}>
                  {biocoreUpdateButton}
                </Col>
              </Row>
            </div>
          </Col>

          <Col>
            <div className="p-card px-4 py-3">
              <h4>Biocluster</h4>
              <div className="site-status">
                Status: <span className={classDict[this.state.bioclusterStatus]}>{this.state.bioclusterStatus}</span>
              </div>
              <Row className="mt-3">
                <Col sm={6}>
                  <button className="p-btn-1 disabled w-100">Start</button>
                </Col>
                <Col sm={6}>
                  {bioclusterUpdateButton}
                </Col>
              </Row>
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

        <Row className="mt-4">
          <Col>
            <h3>Nodes</h3>
          </Col>
        </Row>

        <Row className="mt-2">
          {this.state.nodeStatuses.map(node => (
            <Col sm={3} className="mb-3">
              <div className="service-data p-3">
                <div className="title">{node.node}</div>
                <div className="site-status">Status: <span className={classDict[node.status]}>{node.status}</span></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}