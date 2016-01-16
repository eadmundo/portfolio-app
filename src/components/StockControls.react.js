import Debug from 'debug';
let debug = Debug('components.StockControls');
import React from 'react';
import Marty from 'marty';

class SymbolInput extends React.Component {

  onChange(event) {
    debug(event.target.value);
    this.app.PortfolioActionCreator.changeSymbol(event.target.value);
  }

  render() {
    return (
      <div className="control form-group">
        <label htmlFor="symbolInput">Symbol:</label>
        <input
          className="form-control"
          id="symbolInput"
          type="text"
          value={this.props.value}
          onChange={this.onChange.bind(this)}
          placeholder={this.props.placeholder} />
      </div>
    )
  }
}

SymbolInput.defaultProps = {
  placeholder: 'Enter stock symbol'
}

Marty.injectApp(SymbolInput);

class QuantityInput extends React.Component {

  onChange(event) {
    debug(event.target.value);
    this.app.PortfolioActionCreator.changeQuantity(event.target.value);
  }

  render() {
    return (
      <div className="control form-group">
        <label htmlFor="quantityInput">Quantity:</label>
        <input
          className="form-control"
          id="quantityInput"
          type="number"
          value={this.props.value}
          onChange={this.onChange.bind(this)}
          placeholder={this.props.placeholder} />
      </div>
    )
  }
}

QuantityInput.defaultProps = {
  placeholder: 'Enter quantity'
}

Marty.injectApp(QuantityInput);

class AddButton extends React.Component {

  onClick(event) {
    debug('AddButton onClick');
    this.app.PortfolioActionCreator.addStockToHoldings();
  }

  render() {
    return (
      <button
        className="add btn btn-default"
        onClick={this.onClick.bind(this)}>Add</button>
    )
  }
}

Marty.injectApp(AddButton);

class StockControls extends React.Component {
  render() {
    return (
      <div className="stock-controls">
        <SymbolInput value={this.props.symbolInputValue} />
        <QuantityInput value={this.props.quantityInputValue} />
        <AddButton />
      </div>
    )
  }
}

export default StockControls;