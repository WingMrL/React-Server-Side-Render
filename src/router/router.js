import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import App from '../share/App';
import Hello from '../components/Hello';
import About from '../components/About';

const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Hello } />
      <Route path='about' component={ About }></Route>
    </Route>
  </Router>
);

export default routes;