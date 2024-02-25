const AsyncHandler = require("express-async-handler");
const Themes = require("../model/themes");

const findAllThemes = AsyncHandler(async (req, res) => {
  const themesList = await Themes.findAll();

  res.status(200).json({
    description: "Dados buscados com sucesso",
    data: themesList,
  });
});

const findtThemeById = AsyncHandler(async (req, res) => {
  const theme = await Themes.findByPk(req.params.id);
  res.status(200).json({
    description: `dados buscados pelo id: ${req.params.id} com sucesso`,
    data: theme,
  });
});

const createTheme = AsyncHandler(async (req, res) => {
  if (!req.body.descricao) {
    res.status(400).json({
      description: "A descrição precisa estar preenchida",
    });
    return;
  }

  const theme_map = {
    descricao: req.body.descricao,
  };

  const theme = await Themes.create(theme_map);

  res.status(200).json({
    description: "Dados salvos com sucesso",
  });
});

const updateTheme = AsyncHandler(async (req, res) => {
  const theme = await Themes.update(req.body, {
    where: { id: req.params.id },
  });

  res.status(200).json({
    description: "Tema Alterado",
  });
});

const removeTheme = AsyncHandler(async (req, res) => {
  const theme = await Themes.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({
    description: "Dados salvos com sucesso",
  });
});

module.exports = {
  createTheme,
  findAllThemes,
  findtThemeById,
  updateTheme,
  removeTheme,
};
