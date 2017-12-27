import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../share/App';
import rootReducer from '../reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from '../router/router';
import { match, RouterContext } from 'react-router';

const store = createStore(rootReducer);

async function serverRender(ctx, next) {
  let _renderProps, _error, _redirectLocation;

  match({routes: routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    _error            = error;
    _redirectLocation = redirectLocation;
    _renderProps      = renderProps;
  });

  if(_renderProps) {
    await ctx.render('index', {
      app: ReactDOMServer.renderToString(
            <Provider store={ store }>
              <RouterContext { ..._renderProps } />
            </Provider>
          ),
      state: store.getState(),
      title: 'ssr'
    });
  } else if( _error ) {
    ctx.status = 500;
    ctx.body = _error.message;
  } else if( _redirectLocation ) {
    ctx.redirect(301, _redirectLocation.pathname + _redirectLocation.search);
  } else {
    await next();
  }
}

// export default serverRender;
module.exports = function () {
  return serverRender;
};