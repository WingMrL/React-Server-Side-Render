const Router = require('koa-router');
import serverRender from '../src/server/index';

let home = new Router();

home.get('/', serverRender);

module.exports = home;