import React from 'react';
import ReactDOM from 'react-dom';
import StateProviders from '@/stores';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import 'antd-mobile/2x/es/global';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <StateProviders>
    <HashRouter>
      <Routes />
    </HashRouter>
  </StateProviders>,
  document.getElementById('root'),
);
