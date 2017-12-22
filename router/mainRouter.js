const Router = require('koa-router');
import homeRouter from './home';

let router = new Router();
router.use('/', homeRouter.routes(), homeRouter.allowedMethods());

module.exports = router;