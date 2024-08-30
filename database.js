const Sequelize = require('sequelize');

const sequelize = new Sequelize("bookapp", "root", "Nick@root21", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

module.exports = sequelize;