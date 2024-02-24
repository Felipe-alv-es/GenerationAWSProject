const Sequelize = require("sequelize");
const db = require("../config/config");
const User = require("./users");

const posts = db.define(
  "Postagem",
  {
    titulo: Sequelize.STRING,
    texto: Sequelize.STRING,
    usuario: Sequelize.INTEGER,
    tema: Sequelize.STRING,
  },
  {
    tableName: "Postagem",
    timestamps: true,
  }
);

posts.belongsTo(User, { foreignKey: "usuario", allowNull: false });

module.exports = posts;
