const app = require("./src/app/index");
const { SERVER_PORT } = require("./src/config/index");
require("./src/utils/handle-error");

app.listen(SERVER_PORT, () => {
  console.log(`${SERVER_PORT}端口启动成功`);
});
