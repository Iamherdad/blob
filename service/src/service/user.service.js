const dbConnection = require("../db/index");

class UserService {
  async findUser(username) {
    const statement = "SELECT * FROM `user` WHERE username=?;";
    const [result] = await dbConnection.execute(statement, [username]);
    return result;
  }

  async create(username, password, avatar) {
    const statement =
      "INSERT INTO `user` (username,password,avatar) VALUES(?,?,?);";
    const [result] = await dbConnection.execute(statement, [
      username,
      password,
      avatar,
    ]);
    return result;
  }
}

module.exports = new UserService();
