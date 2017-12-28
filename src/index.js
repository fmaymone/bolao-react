import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Demo from './demo'
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'typeface-roboto'


const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<App />, rootElement);
}
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
