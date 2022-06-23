import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

import '../node_modules/react-bootstrap/dist/react-bootstrap'

// import '../node_modules/bootstrap/dist/css/min.css'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  ,
  document.getElementById('root')
);

