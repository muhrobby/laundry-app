const { Sequelize } = require("sequelize");

const DB = new Sequelize("mysql://root:@localhost:3306/laundry_app");

module.exports = DB;
