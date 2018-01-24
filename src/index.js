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
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import routes from './routes';
import 'typeface-roboto'

const rootReducer = combineReducers({
  data: DataReducer,
  ctr: counterReducer
});

const store = createStore(rootReducer);
ReactDOM.render(

<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>, document.getElementById('root'));
