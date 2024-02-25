const Sequelize = require("sequelize");
const db = require("../config/config");
const User = require("./users");
const Themes = require("./themes");

const posts = db.define(
  "Postagem",
  {
    titulo: Sequelize.STRING,
    texto: Sequelize.STRING,
    usuario: Sequelize.INTEGER,
    tema: Sequelize.INTEGER,
  },
  {
    tableName: "Postagem",
    timestamps: true,
  }
);

posts.belongsTo(User, { foreignKey: "usuario", allowNull: false });
posts.belongsTo(Themes, { foreignKey: "tema", allowNull: false });

module.exports = posts;
