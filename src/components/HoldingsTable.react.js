import React from 'react';
import Marty from 'marty';
import _ from 'lodash';
import classname from 'classnames';

class DeleteButton extends React.Component {

  onClick(event) {
    this.app.PortfolioActionCreator.removeStockFromHoldings(
      this.props.rowNumber
    );
  }

  render() {
    return (
      <span
        className="glyphicon glyphicon-trash"
        onClick={this.onClick.bind(this)} />
    )
  }
}

Marty.injectApp(DeleteButton);

class Row extends React.Component {

  get amount() {
    return this.props.item.quantity * this.props.item.price;
  }

  get price() {
    return new Number(this.props.item.price);
  }

  render() {
    return(
      <tr>
        <td>{this.props.item.symbol}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.quantity}</td>
        <td>{'$' + this.price.toFixed(2)}</td>
        <td>{'$' + this.amount.toFixed(2)}</td>
        <td><DeleteButton rowNumber={this.props.rowNumber} /></td>
      </tr>
    );
  }
};

class HoldingsTable extends React.Component {

  get tableRows() {
    return this.props.holdings.map((item, i) => {
      return (
        <Row
          key={'row' + i}
          rowNumber={i}
          item={item} />
      )
    });
  }

  get tableBody() {
    return (
      <tbody>
        {this.tableRows}
        <tr>
          <td colSpan="6">Total: ${this.props.total.toFixed(2)}</td>
        </tr>
      </tbody>
    )
  }

  get classNames() {
    return classname(
      'table',
      'table-striped',
      'table-hover'
    );
  }

  render() {
    return (
      <table className={this.classNames}>
        <caption>Holdings</caption>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Edit</th>
          </tr>
        </thead>
        {this.tableBody}
      </table>
    )
  }
}

export default HoldingsTable;