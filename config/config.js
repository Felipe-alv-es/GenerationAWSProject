const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const path = require("path");
const colors = require("colors");
require("pg");

dotenv.config({
  path: path.resolve(__dirname, `../.env`),
});

const db = new Sequelize(`${process.env.DATABASE_HOST}`, {
  dialect: "postgresql",
});

console.log(`NODE_ENV=${process.env.NODE_ENV}`.yellow);

module.exports = db;
