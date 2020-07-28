const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const userService = require('./user.service');
const logsService = require('./logs.service');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(async (ctx, next) => {
  ctx.body = 'Hello!';
  await next();
});

router.get('/me', async (ctx) => {
  const { results } = await userService.find();
  ctx.body = results;
});

router.post('/logs', async (ctx) => {
  const data  = ctx.request.body;
  const result = await logsService.create({
    ...data
  });
  ctx.body = result;
});

router.get('/logs', async (ctx) => {
  const { results } = await logsService.find();
  ctx.body = results;
});

app.use(router.routes());

app.listen(5642, () => {
  console.log('Server running on https://localhost:5642');
});
