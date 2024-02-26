const AsyncHandler = require("express-async-handler");
const Posts = require("../model/posts");
const User = require("../model/users");
const Theme = require("../model/themes");

const findAllPosts = AsyncHandler(async (req, res) => {
  const post = await Posts.findAll({
    include: [
      { model: User, as: "Usuario" },
      { model: Theme, as: "Tema" },
    ],
  });

  res.status(200).json({
    description: "Dados buscados com sucesso",
    data: post,
  });
});

const findPostById = AsyncHandler(async (req, res) => {
  const post = await Posts.findByPk(req.params.id);
  res.status(200).json({
    description: `Dados buscados pelo id: ${req.params.id} com sucesso`,
    data: post,
  });
});

const createPosts = AsyncHandler(async (req, res) => {
  if (!req.body.titulo || !req.body.texto) {
    res.status(400).json({
      description: "O titulo e o texto precisam estar preenchidos",
    });
    return;
  }

  try {
    const existingUser = await User.findOne({
      where: {
        id: req.body.usuario_id,
      },
    });

    if (!existingUser) {
      return res.status(400).json({
        description: "Usuário não encontrado",
      });
    }

    const existingTheme = await Theme.findOne({
      where: {
        id: req.body.tema_id,
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
      usuario: req.body.usuario_id,
      tema: req.body.tema_id,
    };

    const post = await Posts.create(posts_map);
    post.usuario_id = existingUser.id;
    post.tema_id = existingTheme.id;
    await post.save();

    res.status(200).json({
      description: "Post criado com sucesso",
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
    description: "Post alterado com sucesso",
  });
});

const removePosts = AsyncHandler(async (req, res) => {
  const post = await Posts.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    description: "Post removido com sucesso",
  });
});

module.exports = {
  findAllPosts,
  createPosts,
  findPostById,
  updatePosts,
  removePosts,
};
