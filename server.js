require('babel-register');
require('babel-polyfill');
const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const path = require('path');
const router = require('./router/mainRouter.js');
const logger = require('./middleware/logger');
const serverRender = require('./src/server/index');
const app = new Koa();

app.use(logger());

app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}));

const staticPath = './public';
app.use(static(path.join(__dirname, staticPath)));

app.use(serverRender());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

console.log('Server listening on port 3000...');