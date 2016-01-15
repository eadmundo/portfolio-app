require('./sass/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Marty, {ApplicationContainer} from 'marty';
import debug from 'debug';
import Application from './Application';
import Portfolio from './components/Portfolio.react';
import PortfolioStore from './stores/PortfolioStore';
import PortfolioActionCreator from './actions/PortfolioActionCreator';
import PortfolioQueries from './queries/PortfolioQueries';
import PortfolioSource from './sources/PortfolioSource';

let app = new Application();

//Expose React for the dev tools
window.React = React;

//Expose the debugger
window.myDebug = debug;

//Expose the marty app
window.Marty = Marty;

app.register('PortfolioStore', PortfolioStore);
app.register('PortfolioActionCreator', PortfolioActionCreator);
app.register('PortfolioQueries', PortfolioQueries);
app.register('PortfolioSource', PortfolioSource);

ReactDOM.render((
  <ApplicationContainer app={app}>
    <Portfolio />
  </ApplicationContainer>
), document.getElementById('react'));