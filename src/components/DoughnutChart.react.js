import React from 'react';
import ReactDOM from 'react-dom';

const COLOURS = [
  ['#E0E0E0', '#c9c9c9'],
  ['#99C4D5', '#89b0bf'],
  ['#F7464A', '#FF5A5E'],
  ['#46BFBD', '#5AD3D1'],
  ['#FDB45C', '#FFC870']
];

class DoughnutChart extends React.Component {

  get data() {
    return this.props.holdings.map((item, i) => {
      let amount = item.quantity * item.price;
      let colour = COLOURS[i % COLOURS.length];
      return {
        value: amount,
        color: colour[0],
        highlight: colour[1],
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
        width="250"
        height="250"></canvas>
    )
  }
}

export default DoughnutChart;