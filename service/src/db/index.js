const mysql = require("mysql2");
const { HOST, USER, PASSWORD, DATABASE, LIMIT } = require("../config/index");

const dbConnection = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  connectionLimit: LIMIT,
});

dbConnection.getConnection((err, connection) => {
  if (err) {
    console.log("mysql创建连接池失败");
    return;
  }

  connection.connect((err) => {
    if (err) {
      console.log("mysql连接失败");
      return;
    }
  });
  console.log("mysql连接成功");
});

module.exports = dbConnection.promise();
