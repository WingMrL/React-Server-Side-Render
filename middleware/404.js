async function render404(ctx, next) {
  ctx.status = 404;
  await ctx.render('404', {
    title: '404'
  });
  await next();
}

module.exports = function() {
  return render404;
}