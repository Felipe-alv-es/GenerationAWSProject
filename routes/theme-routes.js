const Express = require("express");
const routes = Express.Router();
const {
  createTheme,
  findAllThemes,
  findtThemeById,
  updateTheme,
  removeTheme,
} = require("../controllers/themes-controller");

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Themes:
 *        type: object
 *        properties:
 *          descricao:
 *            type: string
 *            description: Informe a descricao
 *            example: descrição de exemplo
 *          postagem:
 *            type: string
 *            description: Informe a postagem
 *            example: 10/10/2010
 */

/**
 * @swagger
 * /api/theme:
 *  get:
 *    tags:
 *      - Temas
 *    summary: Busca todos os Temas
 *    description: Busca todos os Temas
 *    responses:
 *      200:
 *        description: Lista de todos Temas
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Busca realizada com sucesso
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Users'
 *
 */
routes.get("/", findAllThemes);

/**
 * @swagger
 * /api/theme/{id}:
 *    get:
 *      tags:
 *        - Temas
 *      summary: Busca Tema pela ID
 *      description: Busca Tema pela ID
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: id do Tema
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: dados do Tema
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Dados buscados com sucesso
 *                  data:
 *                    type: object
 *                    properties:
 *                      descricao:
 *                        type: string
 *                        description: Informe a descricao
 *                        example: Descrição de exemplo
 *                      postagem:
 *                        type: string
 *                        description: Informe a postagem
 *                        example: 10/10/2010
 *
 */
routes.get("/:id", findtThemeById);

/**
 * @swagger
 * /api/theme/:
 *    post:
 *      tags:
 *        - Temas
 *      description: Cria um Tema na API
 *      summary: Cria os dados dos Temas
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                descricao:
 *                  type: string
 *                  description: Informe a descricao
 *                  example: descrição de exemplo
 *                postagem:
 *                  type: string
 *                  description: Informe a postagem
 *                  example: 10/10/2010
 *      responses:
 *        200:
 *          description: Successfully created data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully created data!
 *
 */
routes.post("/", createTheme);

/**
 * @swagger
 * /api/theme/{id}:
 *    delete:
 *      tags:
 *        - Temas
 *      summary: Remover um Tema
 *      description: Remover um Tema
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Tema ID
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: Removido com sucesso
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Atualização realizada com sucesso!
 *
 *
 */
routes.delete("/:id", removeTheme);

/**
 * @swagger
 * /api/theme/{id}:
 *    put:
 *      tags:
 *        - Temas
 *      summary: Atualiza dados dos Tema
 *      description: Atualiza dados dos Tema
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Theme id
 *          schema:
 *            type: integer
 *            format: int64
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                descricao:
 *                  type: string
 *                  description: Informe a descricao
 *                  example: Descrição de exemplo
 *                postagem:
 *                  type: string
 *                  description: Informe a postagem
 *                  example: 10/10/2010
 *      responses:
 *        200:
 *          description: Successfully updated data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully updated data!
 *
 *
 */
routes.put("/:id", updateTheme);

module.exports = routes;
