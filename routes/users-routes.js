const Express = require("express");
const routes = Express.Router();
const {
  createUsers,
  findAllUsers,
  findtUsersById,
  updateUsers,
  removeUsers,
} = require("../controllers/users-controller");

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
 * /api/users:
 *  get:
 *    tags:
 *      - Usuario
 *    summary: Busca todos os usuários
 *    description: Busca todos os usuários
 *    responses:
 *      200:
 *        description: Lista de todos usuários
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
routes.get("/", findAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *    get:
 *      tags:
 *        - Usuario
 *      summary: Busca usuário pela ID
 *      description: Busca usuário pela ID
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: id do usuário
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: dados do usuário
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Dados buscados com sucesso
 */
routes.get("/:id", findtUsersById);

/**
 * @swagger
 * /api/users/:
 *    post:
 *      tags:
 *        - Usuario
 *      description: Cria um usuário na API
 *      summary: Cria os dados dos usuários
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                nome:
 *                  type: string
 *                  description: Informe o nome
 *                  example: felipe
 *                email:
 *                  type: string
 *                  description: Informe o Email
 *                  example: felipealves@gmail.com
 *                foto:
 *                  type: string
 *                  description: Insira sua foto (Opcional)
 *                  example: placeholderValue
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
 *                    example: Dados criados com sucesso!
 *
 */
routes.post("/", createUsers);

/**
 * @swagger
 * /api/users/{id}:
 *    delete:
 *      tags:
 *        - Usuario
 *      summary: Remover um usuário
 *      description: Remover um usuário
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: usuário ID
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
routes.delete("/:id", removeUsers);

/**
 * @swagger
 * /api/users/{id}:
 *    put:
 *      tags:
 *        - Usuario
 *      summary: Atualiza dados dos usuário
 *      description: Atualiza dados dos usuário
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Users id
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
 *                nome:
 *                  type: string
 *                  description: Informe o nome
 *                  example: felipe
 *                email:
 *                  type: string
 *                  description: Informe o Email
 *                  example: felipealves@gmail.com
 *                foto:
 *                  type: string
 *                  description: Insira sua foto (Opcional)
 *                  example: placeholderValue
 *      responses:
 *        200:
 *          description: Dados alterados com sucesso
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Dados alterados com sucesso!
 *
 *
 */
routes.put("/:id", updateUsers);

module.exports = routes;
