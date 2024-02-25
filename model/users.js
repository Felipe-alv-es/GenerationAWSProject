const Sequelize = require("sequelize");
const db = require("../config/config");

const users = db.define(
  "Usuario",
  {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    foto: Sequelize.STRING,
    postagem: Sequelize.INTEGER,
  },
  {
    tableName: "Usuario",
    timestamps: true,
  }
);

module.exports = users;
