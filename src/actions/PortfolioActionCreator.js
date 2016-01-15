import Debug from 'debug';
let debug = Debug('actions.PortfolioActionCreator');
import Marty from 'marty';
import portfolioConstants from '../constants/portfolioConstants';

class PortfolioActionCreator extends Marty.ActionCreators {

  addStockToHoldings() {
    debug('addStockToHoldings');
    this.dispatch(portfolioConstants.ADD_STOCK_TO_HOLDINGS);
  }

  changeSymbol(symbol) {
    debug('changeSymbol', symbol);
    this.dispatch(portfolioConstants.CHANGE_SYMBOL, symbol);
  }

  changeQuantity(quantity) {
    debug('changeQuantity', quantity);
    this.dispatch(portfolioConstants.CHANGE_QUANTITY, quantity);
  }
}

export default PortfolioActionCreator;