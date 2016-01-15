import React from 'react';
import Marty from 'marty';
import StockControls from './StockControls.react';
import HoldingsTable from './HoldingsTable.react';
import DoughnutChart from './DoughnutChart.react';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h1>Portfolio Partner</h1>
        <StockControls
          symbolInputValue={this.props.viewState.symbolInputValue}
          quantityInputValue={this.props.viewState.quantityInputValue} />
        <HoldingsTable holdings={this.props.viewState.holdings} />
        <DoughnutChart holdings={this.props.viewState.holdings} />
      </div>
    )
  }
}

export default Marty.createContainer(Portfolio, {
  listenTo: [
    'PortfolioStore'
  ],
  fetch: {
    viewState() {
      return this.app.PortfolioStore.getViewState();
    }
  }
});