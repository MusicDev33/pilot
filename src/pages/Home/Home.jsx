import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';

import DataUsageChart from 'components/DataUsageChart/DataUsageChart';

import './Home.scss';

import { token } from 'token';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

Chart.defaults.color='white';

export default class Home extends Component {
  chartRef = React.createRef();
  chartRefs = [];

  constructor() {
    super();

    this.state = {
      usageData: [],
      chartRefs: []
    }
  }

  componentDidMount() {
    axios.get('http://bioinfocore.usu.edu/api/quotas/all', {headers: {'kbl-token': token}})
      .then(response => {
        this.setState({usageData: response.data.payload}, () => {
          console.log(this.state.usageData);
        });
      })
      .catch(e => {
        console.log(e.response);
      })
  }

  render() {

    return (
      <Container fluid className="pt-3">
        <Row>
          <Col className="pl-4">
            <h5 className="login-text">
              <IconContext.Provider value={{ className: "user-icon" }}>
                <FaUserAlt />
              </IconContext.Provider> smccowan
            </h5>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h1>Home</h1>
          </Col>
        </Row>

        <Row className="mt-3 card-view">
          {this.state.usageData.map(usage => (
            <Col sm={3} className="pb-4">
              <h5 className="text-center">{usage.name}</h5>
              <DataUsageChart usageData={usage} />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
