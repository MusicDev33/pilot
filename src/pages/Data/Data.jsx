import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DataUsageChart from 'components/DataUsageChart/DataUsageChart';

import { getDataUsage } from 'services/data/data';

import './Data.scss';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

Chart.defaults.color='white';

export default class Data extends Component {
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
    getDataUsage()
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
        <Row className="mt-3">
          <Col>
            <h1>Data</h1>
          </Col>
        </Row>

        <Row className="mt-3 p-card">
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