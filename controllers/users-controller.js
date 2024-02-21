const AsyncHandler = require("express-async-handler");
const Users = require("../model/users");

const findAllUsers = AsyncHandler(async (req, res) => {
  const usersList = await Users.findAll();

  res.status(200).json({
    description: "Successsfully fetched users data!",
    data: usersList,
  });
});

const createUsers = AsyncHandler(async (req, res) => {
  if (!req.body.nome) {
    res.status(400).json({
      description: "O nome precisa estar preenchido",
    });
  }
  if (!req.body.idade) {
    res.status(400).json({
      description: "A idade precisa estar preenchida",
    });
  }
  if (!req.body.numero_da_sala) {
    res.status(400).json({
      description: "O numero da sala precisa estar preenchido",
    });
  }

  const users_map = {
    nome: req.body.nome,
    idade: req.body.idade,
    nota_do_primeiro_semestre: req.body.nota_do_primeiro_semestre,
    nota_do_segundo_semestre: req.body.nota_do_segundo_semestre,
    nome_do_professor: req.body.nome_do_professor,
    numero_da_sala: req.body.numero_da_sala,
  };

  const users = await Users.create(users_map);

  res.status(200).json({
    description: "Successfully saved user data!",
  });
});

const findtUsersById = AsyncHandler(async (req, res) => {
  const user = await Users.findByPk(req.params.id);
  res.status(200).json({
    description: `Successfully fetch by id: ${req.params.id} user data!`,
    data: user,
  });
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
