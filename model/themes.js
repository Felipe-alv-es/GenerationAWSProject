const Sequelize = require("sequelize");
const db = require("../config/config");

const themes = db.define(
  "Tema",
  {
    descricao: Sequelize.STRING,
    postagem: Sequelize.STRING,
  },
  {
    tableName: "Tema",
    timestamps: true,
  }
);

module.exports = themes;
