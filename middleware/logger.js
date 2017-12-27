function log( ctx ) {
  console.log( `method: ${ctx.method}` );
  console.log( `url: ${ctx.header.host + ctx.url}` );
  console.log( `path: ${ctx.request.url}` );
  console.log('=================== end ===================');
}

module.exports = function () {
  return async function ( ctx, next ) {
    log(ctx);
    await next();
  }
}