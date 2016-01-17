import React from 'react';
import Marty from 'marty';
import _ from 'lodash';
import StockControls from './StockControls.react';
import HoldingsTable from './HoldingsTable.react';
import DoughnutChart from './DoughnutChart.react';

class Portfolio extends React.Component {

  get total() {
    return _.sum(this.props.viewState.holdings, (holding) => {
      return holding.quantity * holding.price;
    });
  }

  render() {
    return (
      <div>
        <h1>Portfolio Partner</h1>
        <StockControls
          symbolInputValue={this.props.viewState.symbolInputValue}
          quantityInputValue={this.props.viewState.quantityInputValue} />
        <div className="holdings">
          <HoldingsTable
            total={this.total}
            holdings={this.props.viewState.holdings} />
          <div>
            <h3>Total: ${this.total.toFixed(2)}</h3>
            <DoughnutChart holdings={this.props.viewState.holdings} />
          </div>
        </div>
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