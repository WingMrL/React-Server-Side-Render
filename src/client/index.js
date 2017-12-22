import App from '../share/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore(window.__REDUX_STATE__);

const render = (Component) => {
  ReactDOM.hydrate(
    <Provider store={ store }>
      <Component />
    </Provider>,
    document.getElementById('root'));
}

render(App);