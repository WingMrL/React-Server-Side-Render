import App from '../share/App';
import React from 'react';
import ReactDOM from 'react-dom';

const render = (Component) => {
  ReactDOM.hydrate(<Component />, document.getElementById('root'));
}

render(App);