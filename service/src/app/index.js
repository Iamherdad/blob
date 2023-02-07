const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const path = require("path");
const cors = require('koa2-cors')
const registerRouters = require("../router/index");

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(static(path.resolve(__dirname, "../static")));
registerRouters(app);

module.exports = app;
