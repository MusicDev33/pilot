import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';

import './Home.scss';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

Chart.defaults.color='white';

export default class Home extends Component {
  chartRef = React.createRef();

  constructor() {
    super();

    this.state = {
      usageData: [],
      chartRefs: []
    }
  }

  componentDidMount() {
    axios.get('http://bioinfocore.usu.edu/api/quotas/all')
      .then(response => {
        this.setState({usageData: response.data.payload}, () => {
          console.log(this.state.usageData);

          const thisChartRef = this.chartRef.current.getContext('2d');

          new Chart(thisChartRef, {
            type: 'doughnut',
            data: {
              labels: [this.state.usageData[0].name, 'unused'],
              datasets: [{
                data: [this.state.usageData[0].usage, 100 - this.state.usageData[0].usage],
                backgroundColor: [
                  '#e5989b',
                  'rgb(120, 120, 120)'
                ]
              }]
            },
            options: {
              legend: {
                labels: {
                  fontColor: 'white'
                }
              }
            }
          });

          /*
          for (let usage of this.state.usageData) {
            let ref = React.createRef();
            let currentRef = ref.current.getContext('2d');

            new Chart(currentRef, {
              type: 'doughnut',
              data: {
                labels: [usage.name, 'unused'],
                datasets: [{
                  data: [usage.usage, 100 - usage.usage]
                }]
              }
            });

            const addedRef = this.state.chartRefs;
            addedRef.push(ref);

            this.setState({chartRefs: addedRef});
          }
          */
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

        <Row className="mt-3">
          <Col sm={3}>
            <canvas id="chart" ref={this.chartRef}></canvas>
          </Col>
        </Row>
      </Container>
    )
  }
}
