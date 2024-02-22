const Express = require("express");
const routes = Express.Router();
const {
  createPosts,
  findAllPosts,
} = require("../controllers/posts-controller");

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Users:
 *        type: object
 *        properties:
 *          nome:
 *            type: string
 *            description: Informe o nome
 *            example: felipe
 *          email:
 *            type: string
 *            description: Informe o Email
 *            example: felipealves@gmail.com
 *          foto:
 *            type: string
 *            description: Insira sua foto (Opcional)
 *            example: placeholderValue
 *          postagem:
 *            type: string
 *            description: Informe a postagem
 *            example: 10/10/2010
 */

/**
 * @swagger
 * /api/posts/:
 *    post:
 *      tags:
 *        - Postagem
 *      description: Cria uma postagem na API
 *      summary: Criar uma postagem
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                titulo:
 *                  type: string
 *                  description: Informe o Titulo
 *                  example: Titulo generico ponto png
 *                texto:
 *                  type: string
 *                  description: Informe o Texto
 *                  example: texto generico ponto jpg
 *                usuario:
 *                  type: string
 *                  description: Insira o usuário
 *                  example: Fulano
 *                tema:
 *                  type: string
 *                  description: Informe o tema
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
routes.post("/", createPosts);

/**
 * @swagger
 * /api/posts:
 *  get:
 *    tags:
 *      - Postagem
 *    summary: Busca todas as postagens
 *    description: Busca todas as postagens
 *    responses:
 *      200:
 *        description: Lista de todas postagens
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
routes.get("/", findAllPosts);

module.exports = routes;
