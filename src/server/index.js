import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../share/App';
import rootReducer from '../reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

async function serverRender(ctx) {
  await ctx.render('index', {
    app: ReactDOMServer.renderToString(
          <Provider store={ store }>
            <App />
          </Provider>
        ),
    state: store.getState(),
    title: 'ssr'
  });
}

export default serverRender;