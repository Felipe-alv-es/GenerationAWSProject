const Sequelize = require("sequelize");
const db = require("../config/config");

const users = db.define(
  "students",
  {
    nome: Sequelize.STRING,
    idade: Sequelize.STRING,
    nota_do_primeiro_semestre: Sequelize.STRING,
    nota_do_segundo_semestre: Sequelize.STRING,
    nome_do_professor: Sequelize.STRING,
    numero_da_sala: Sequelize.STRING,
  },
  {
    tableName: "students",
    timestamps: true,
  }
);

module.exports = users;
