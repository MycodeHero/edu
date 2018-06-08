require('./db/redis')
require('./db/mysql')
const Koa = require('koa')
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = require('./router/auth') 

const app = new Koa()

app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())
app.listen(9000);
console.log("Your Server is running here: http://localhost:9000")