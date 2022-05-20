import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App';

import { store } from './store/rootReducer';
import { Provider } from 'react-redux';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);