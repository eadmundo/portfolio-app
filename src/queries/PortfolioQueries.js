import Marty from 'marty';
import portfolioConstants from '../constants/portfolioConstants';

class PortfolioQueries extends Marty.Queries {
  getStock(symbol, quantity) {
    return this.app.PortfolioSource.getStock(symbol)
      .then(res => this.dispatch(
        portfolioConstants.RETRIEVE_STOCK, res.body, quantity
      ))
      .catch(err => this.dispatch(
        portfolioConstants.RETRIEVE_STOCK_FAILED, err
      ));
  }
}

export default PortfolioQueries;