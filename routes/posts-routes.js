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
 *            description: Informe o ID da postagem
 *            example: 1
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
 *          description: ID do post
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: Ação realizada com sucesso
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Ação realizada com sucesso
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
 *                  example: Titulo de exemplo
 *                texto:
 *                  type: string
 *                  description: Informe o Texto
 *                  example: Texto de exemplo
 *                usuario:
 *                  type: string
 *                  description: Insira o ID do usuário a ser vinculado
 *                  example: 1
 *                tema:
 *                  type: string
 *                  description: Informe o ID do tema a ser vinculado
 *                  example: 1
 *      responses:
 *        200:
 *          description: Dados criados com sucesso
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Dados criados com sucesso
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
 *                  example: Titulo exemplo
 *                texto:
 *                  type: string
 *                  description: Informe o Texto
 *                  example: Texto exemplo
 *                usuario:
 *                  type: string
 *                  description: Insira o ID do usuário
 *                  example: 1
 *                tema:
 *                  type: string
 *                  description: Informe o ID do tema
 *                  example: 1
 *      responses:
 *        200:
 *          description: Dados atualizados com sucesso
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Dados atualizados com sucesso
 *
 *
 */
routes.put("/:id", updatePosts);

module.exports = routes;
