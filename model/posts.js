const Sequelize = require("sequelize");
const db = require("../config/config");

const posts = db.define(
  "Postagem",
  {
    titulo: Sequelize.STRING,
    texto: Sequelize.STRING,
    usuario: Sequelize.STRING,
    tema: Sequelize.STRING,
  },
  {
    tableName: "Postagem",
    timestamps: true,
  }
);

module.exports = posts;
