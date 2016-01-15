import React from 'react';
import ReactDOM from 'react-dom';

class DoughnutChart extends React.Component {

  get data() {
    return this.props.holdings.map((item, i) => {
      let amount = item.quantity * item.price;
      return {
        value: amount,
        label: item.name
      }
    });
  }

  renderChart() {
    let ctx = ReactDOM.findDOMNode(this).getContext("2d");
    let myNewChart = new Chart(ctx).Doughnut(this.data, {
      animation: false
    });
  }

  componentDidUpdate() {
    this.renderChart();
  }

  componentDidMount() {
    this.renderChart();
  }

  render() {
    return (
      <canvas
        id="holdingsChart"
        width="400"
        height="400"></canvas>
    )
  }
}

export default DoughnutChart;