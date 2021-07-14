import React, { Component } from 'react';
import { Chart, registerables } from 'chart.js';
import './DataUsageChart.scss';

Chart.register(...registerables);

Chart.defaults.color='white';
Chart.defaults.plugins.legend.display=false;

export default class DataUsageChart extends Component {
  chartRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    const thisChartRef = this.chartRef.current.getContext('2d');

    new Chart(thisChartRef, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.props.usageData.usage, 100 - this.props.usageData.usage],
          backgroundColor: [
            '#e5989b',
            '#676767'
          ],
          borderColor: [
            '#915e60',
            '#757575'
          ],
          borderWidth: [2, 0]
        }]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div className="text-center mb-2 usage-text">{this.props.usageData.usageMax}</div>
        <canvas id="chart" ref={this.chartRef}></canvas>
      </div>
    )
  }
}
