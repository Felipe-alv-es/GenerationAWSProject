const AsyncHandler = require("express-async-handler");
const Users = require("../model/users");

const findAllUsers = AsyncHandler(async (req, res) => {
  const usersList = await Users.findAll();

  res.status(200).json({
    description: "Dados salvos com sucesso",
    data: usersList,
  });
});

const findtUsersById = AsyncHandler(async (req, res) => {
  const user = await Users.findByPk(req.params.id);
  res.status(200).json({
    description: `dados buscados pelo id: ${req.params.id} com sucesso`,
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

  const existingUser = await Users.findOne({
    where: { email: req.body.email },
  });
  if (existingUser) {
    res.status(400).json({
      description: "Este e-mail já está cadastrado",
    });
    return;
  }

  const users_map = {
    nome: req.body.nome,
    email: req.body.email,
    foto: req.body.foto,
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
    description: `Usuário alterado`,
  });
});

const removeUsers = AsyncHandler(async (req, res) => {
  const user = await Users.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    description: "Dados salvos com sucesso",
  });
});

module.exports = {
  createUsers,
  findAllUsers,
  findtUsersById,
  updateUsers,
  removeUsers,
};
