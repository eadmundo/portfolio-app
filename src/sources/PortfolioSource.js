import Marty from 'marty';


class PortfolioSource extends Marty.HttpStateSource {

  getStock(symbol) {
    console.log(symbol);
    return this.get({
      url: 'http://localhost:8081/quote/' + symbol,
      credentials: 'include'
    }).then(res => {
      return res;
    });
  }

}

export default PortfolioSource;