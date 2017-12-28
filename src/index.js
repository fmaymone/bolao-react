import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Demo from './demo'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'typeface-roboto'


ReactDOM.render(<Demo />, document.getElementById('root'));
registerServiceWorker();
