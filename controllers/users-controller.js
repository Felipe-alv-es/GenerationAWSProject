const AsyncHandler = require("express-async-handler");
const Users = require("../model/users");
const Posts = require("../model/posts");

const findAllUsers = AsyncHandler(async (req, res) => {
  const usersList = await Users.findAll();

  res.status(200).json({
    description: "Successfully fetched users data!",
    data: usersList,
  });
});

const findtUsersById = AsyncHandler(async (req, res) => {
  const user = await Users.findByPk(req.params.id);
  res.status(200).json({
    description: `Successfully fetch by id: ${req.params.id} user data!`,
    data: user,
  });
});

const createUsers = AsyncHandler(async (req, res) => {
  if (!req.body.nome || !req.body.email) {
    res.status(400).json({
      description: "O nome e o email precisam estar preenchidos",
    });
    return;
  }

  Users.hasMany(Posts, { foreignKey: "usuario" });

  const users_map = {
    nome: req.body.nome,
    email: req.body.email,
    foto: req.body.foto,
    postagem: req.body.postagem,
  };

  try {
    const users = await Users.create(users_map);

    res.status(200).json({
      description: "Dados salvos com sucesso",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      description: "Erro interno do servidor",
    });
  }
});

const updateUsers = AsyncHandler(async (req, res) => {
  const user = await Users.update(req.body, {
    where: { id: req.params.id },
  });

  res.status(200).json({
    description: `Aluno alterado!`,
  });
});

const removeUsers = AsyncHandler(async (req, res) => {
  const user = await Users.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    description: `Successfully deleted user data!`,
  });
});

module.exports = {
  createUsers,
  findAllUsers,
  findtUsersById,
  updateUsers,
  removeUsers,
};
