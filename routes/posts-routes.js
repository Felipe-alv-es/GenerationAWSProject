const Express = require("express");
const routes = Express.Router();
const {
  createPosts,
  findAllPosts,
  findPostById,
  updatePosts,
  removePosts,
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

/**
 * @swagger
 * /api/posts/{id}:
 *    get:
 *      tags:
 *        - Postagem
 *      summary: Busca post pela ID
 *      description: Busca post pela ID
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: id do post
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: dados do post
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
 *                      nome:
 *                        type: string
 *                        description: Informe o nome
 *                        example: felipe
 *                      email:
 *                        type: string
 *                        description: Informe o Email
 *                        example: felipealves@gmail.com
 *                      foto:
 *                        type: string
 *                        description: Insira sua foto (Opcional)
 *                        example: placeholderValue
 *                      postagem:
 *                        type: string
 *                        description: Informe a postagem
 *                        example: 10/10/2010
 *
 */
routes.get("/:id", findPostById);

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
 * /api/posts/{id}:
 *    delete:
 *      tags:
 *        - Postagem
 *      summary: Remover um post
 *      description: Remover um post
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: post ID
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
routes.delete("/:id", removePosts);

/**
 * @swagger
 * /api/posts/{id}:
 *    put:
 *      tags:
 *        - Postagem
 *      summary: Atualiza dados do post
 *      description: Atualiza dados do post
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Post id
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
routes.put("/:id", updatePosts);

module.exports = routes;
