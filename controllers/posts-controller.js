const AsyncHandler = require("express-async-handler");
const Posts = require("../model/posts");

const findAllPosts = AsyncHandler(async (req, res) => {
  const Posts = await Posts.findAll();

  res.status(200).json({
    description: "Successfully fetched users data!",
    data: usersList,
  });
});

const createPosts = AsyncHandler(async (req, res) => {
  // if (!req.body.nome) {
  //   res.status(400).json({
  //     description: "O nome precisa estar preenchido",
  //   });
  // }
  // if (!req.body.email) {
  //   res.status(400).json({
  //     description: "O Email precisa estar preenchida",
  //   });
  // }

  const posts_map = {
    titulo: req.body.titulo,
    texto: req.body.texto,
    data: req.body.data,
    usuario: req.body.usuario,
    tema: req.body.tema,
  };

  const posts = await Posts.create(posts_map);

  res.status(200).json({
    description: "Successfully saved user data!",
  });
});

module.exports = {
  findAllPosts,
  createPosts,
};
