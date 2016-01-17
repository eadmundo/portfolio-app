import {
  assert,
  expect
} from 'chai';
import sinon from 'sinon';
import {
  createApplication
} from 'marty/test-utils';
import Application from '../../../Application';

describe('PortfolioStore', () => {

  let app;
  let getStock;

  beforeEach(() => {
    getStock = sinon.stub();
    app = createApplication(Application, {
      include: ['PortfolioStore'],
      stub: {
        PortfolioQueries: {
          getStock: getStock
        }
      }
    });
  });

  describe('addStockToHoldings', () => {

    context('if there are no input values in state', () => {
      it('should not attempt a query', () => {
        app.PortfolioStore.addStockToHoldings();
        expect(getStock.callCount).to.eq(0);
      });
    });

    context('if there are input values in state', () => {

      beforeEach(() => {
        app.PortfolioStore.state = {
          symbolInputValue: 'YHOO',
          quantityInputValue: 100
        };
      });

      it('should call getStock with those values', () => {
        app.PortfolioStore.addStockToHoldings();
        assert(getStock.calledOnce);
        assert(getStock.calledWithExactly('YHOO', 100));
      });
    });
  });

  describe('removeStockFromHoldings', () => {

    context('when there are some holdings in state', () => {

      beforeEach(() => {
        app.PortfolioStore.state = {
          holdings: [
            'holding in row 0',
            'holding in row 1',
            'holding in row 2'
          ]
        };
      });

      it('should remove the holding in the specified row', () => {
        app.PortfolioStore.removeStockFromHoldings(1);
        expect(app.PortfolioStore.state.holdings).to.eql([
          'holding in row 0',
          'holding in row 2'
        ]);
      });
    });

  });

});