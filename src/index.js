import React from 'react';
import ReactDOM from 'react-dom';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Routes history={history} />,
  document.getElementById('root')
);
