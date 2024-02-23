const AsyncHandler = require("express-async-handler");
const Themes = require("../model/themes");

const findAllThemes = AsyncHandler(async (req, res) => {
  const themesList = await Themes.findAll();

  res.status(200).json({
    description: "Successfully fetched theme data!",
    data: themesList,
  });
});

const findtThemeById = AsyncHandler(async (req, res) => {
  const theme = await Themes.findByPk(req.params.id);
  res.status(200).json({
    description: `Successfully fetch by id: ${req.params.id} theme data!`,
    data: theme,
  });
});

const createTheme = AsyncHandler(async (req, res) => {
  //   if (!req.body.nome) {
  //     res.status(400).json({
  //       description: "O nome precisa estar preenchido",
  //     });
  //   }
  //   if (!req.body.email) {
  //     res.status(400).json({
  //       description: "O Email precisa estar preenchida",
  //     });
  //   }

  const theme_map = {
    descricao: req.body.descricao,
    postagem: req.body.postagem,
  };

  const theme = await Themes.create(theme_map);

  res.status(200).json({
    description: "Successfully saved theme data!",
  });
});

const updateTheme = AsyncHandler(async (req, res) => {
  const theme = await Themes.update(req.body, {
    where: { id: req.params.id },
  });

  res.status(200).json({
    description: `Tema Alterado`,
  });
});

const removeTheme = AsyncHandler(async (req, res) => {
  const theme = await Themes.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    description: `Successfully deleted theme data!`,
  });
});

module.exports = {
  createTheme,
  findAllThemes,
  findtThemeById,
  updateTheme,
  removeTheme,
};
