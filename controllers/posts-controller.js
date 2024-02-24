const AsyncHandler = require("express-async-handler");
const Posts = require("../model/posts");
const User = require("../model/users");
const Theme = require("../model/themes");

const findAllPosts = AsyncHandler(async (req, res) => {
  const Posts = await Posts.findAll();

  res.status(200).json({
    description: "Successfully fetched post data!",
    data: usersList,
  });
});

const findPostById = AsyncHandler(async (req, res) => {
  const post = await Posts.findByPk(req.params.id);
  res.status(200).json({
    description: `Successfully fetch by id: ${req.params.id} post data!`,
    data: post,
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

  try {
    const existingUser = await User.findOne({
      where: {
        id: req.body.usuario,
      },
    });

    if (!existingUser) {
      return res.status(400).json({
        description: "Usuário não encontrado",
      });
    }

    const existingTheme = await Theme.findOne({
      where: {
        id: req.body.tema,
      },
    });

    if (!existingTheme) {
      return res.status(400).json({
        description: "Tema não encontrado",
      });
    }

    const posts_map = {
      titulo: req.body.titulo,
      texto: req.body.texto,
      data: req.body.data,
      usuario: req.body.usuario,
      tema: req.body.tema,
    };

    const post = await Posts.create(posts_map);
    post.usuario = existingUser.id;
    post.tema = existingTheme.id;
    await post.save();

    res.status(200).json({
      description: "Successfully saved post data!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      description: "Erro interno do servidor",
    });
  }
});

const updatePosts = AsyncHandler(async (req, res) => {
  const post = await Posts.update(req.body, {
    where: { id: req.params.id },
  });

  res.status(200).json({
    description: `Post alterado!`,
  });
});

const removePosts = AsyncHandler(async (req, res) => {
  const post = await Posts.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    description: `Successfully deleted post data!`,
  });
});

module.exports = {
  findAllPosts,
  createPosts,
  findPostById,
  updatePosts,
  removePosts,
};
