const express = require("express");
const cors = require("cors");
const db = require("./config/config");
const colors = require("colors");
const { errorHandler } = require("./middleware/error-handler");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple router
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to students aplication, go to /api-docs to see the Swagger.",
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// database sync
db.sync()
  .then(() => {
    console.log("Generate Table".green);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`.yellow);
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });

// rout
app.use("/api/users", require("./routes/users-routes"));
app.use("/api/posts", require("./routes/posts-routes"));
app.use("/api/theme", require("./routes/theme-routes"));

// global error handler
app.use(errorHandler);

// Swagger Configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Users API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, { customCssUrl: CSS_URL })
);

module.exports = app;
