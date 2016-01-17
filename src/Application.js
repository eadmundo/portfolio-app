import React from 'react';
import Marty from 'marty';
import debug from 'debug';
import PortfolioStore from './stores/PortfolioStore';
import PortfolioActionCreator from './actions/PortfolioActionCreator';
import PortfolioQueries from './queries/PortfolioQueries';
import PortfolioSource from './sources/PortfolioSource';

class Application extends Marty.Application {
  constructor(options) {
    super(options);
    this.register('PortfolioStore', PortfolioStore);
    this.register('PortfolioSource', PortfolioSource);
    this.register('PortfolioQueries', PortfolioQueries);
    this.register('PortfolioActionCreator', PortfolioActionCreator);
  }
}

export default Application;