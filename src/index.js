import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Demo from './demo'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import DataReducer from './store/reducers/DataReducer';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'typeface-roboto'

const rootReducer = combineReducers({
  data: DataReducer,
  result: resultReducer
});

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
