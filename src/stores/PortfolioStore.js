import Debug from 'debug';
let debug = Debug('stores.PortfolioStore');
import Marty from 'marty';
import portfolioConstants from '../constants/portfolioConstants';

class PortfolioStore extends Marty.Store {
  constructor(options) {
    super(options);
    this.state = {
      symbolInputValue: '',
      quantityInputValue: '',
      holdings: []
    };
    this.handlers = {
      addStockToHoldings: portfolioConstants.ADD_STOCK_TO_HOLDINGS,
      retrieveStock: portfolioConstants.RETRIEVE_STOCK,
      changeSymbol: portfolioConstants.CHANGE_SYMBOL,
      changeQuantity: portfolioConstants.CHANGE_QUANTITY,
      removeStockFromHoldings: portfolioConstants.REMOVE_STOCK_FROM_HOLDINGS
    };
  }

  getViewState() {
    return this.state;
  }

  addStockToHoldings() {
    debug('addStockToHoldings');
    if (!Number.isNaN(this.state.quantityInputValue)
        && this.state.quantityInputValue
        && this.state.symbolInputValue) {
      this.app.PortfolioQueries.getStock(
        this.state.symbolInputValue,
        this.state.quantityInputValue
      );
    }
  }

  changeSymbol(symbol) {
    debug('changeSymbol', symbol);
    this.state.symbolInputValue = symbol;
    this.hasChanged();
  }

  changeQuantity(quantity) {
    debug('changeQuantity', quantity);
    this.state.quantityInputValue = quantity;
    this.hasChanged();
  }

  retrieveStock(stock, quantity) {
    debug('retrieveStock', {
      stock: stock,
      quantity: quantity
    });
    if (stock.retrieved) {
      delete stock.retrieved;
      stock.quantity = quantity;
      this.state.holdings.push(stock);
      this.hasChanged();
    }
  }

  removeStockFromHoldings(rowNumber) {
    this.state.holdings.splice(rowNumber, 1);
    this.hasChanged();
  }
}

export default PortfolioStore;