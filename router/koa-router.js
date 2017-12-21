const Router = require('koa-router');
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from '../src/share/App';

let home = new Router();

home.get('/', async (ctx) => {
  await ctx.render('index', {
    app: ReactDOMServer.renderToString(<App />),
    title: 'ssr'
  });
});

let router = new Router();

router.use('/', home.routes(), home.allowedMethods());

module.exports = router;