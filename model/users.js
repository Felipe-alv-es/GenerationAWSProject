const Sequelize = require("sequelize");
const db = require("../config/config");

const users = db.define(
  "Usuario",
  {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    foto: Sequelize.STRING,
    postagem: Sequelize.STRING,
  },
  {
    tableName: "Usuario",
    timestamps: true,
  }
);

module.exports = users;
