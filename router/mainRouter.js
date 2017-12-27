const Router = require('koa-router');
const pageNotFound = require('../middleware/404');

let router = new Router();

router.get('/apis', async (ctx) => {
  ctx.body = '<h1>Welcome to call apis</h1>';
});

router.get('*', pageNotFound());

module.exports = router;