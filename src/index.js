require('./sass/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Marty, {ApplicationContainer} from 'marty';
import debug from 'debug';
import Application from './Application';
import Portfolio from './components/Portfolio.react';

let app = new Application();

//Expose React for the dev tools
window.React = React;

//Expose the debugger
window.myDebug = debug;

//Expose the marty app
window.Marty = Marty;

ReactDOM.render((
  <ApplicationContainer app={app}>
    <Portfolio />
  </ApplicationContainer>
), document.getElementById('react'));