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
 *            nome:
 *              type: string
 *              description: Informe o nome
 *              example: felipe
 *            idade:
 *              type: string
 *              description: Informe a idade
 *              example: 20
 *            nota_do_primeiro_semestre:
 *              type: string
 *              description: Informe a nota do primeiro semestre
 *              example: 10
 *            nota_do_segundo_semestre:
 *              type: string
 *              description: Informe a nota do segundo semestre
 *              example: 10
 *            nome_do_professor:
 *              type: string
 *              description: Informe o nome do professor
 *              example: Arthur Severo
 *            numero_da_sala:
 *              type: string
 *              description: Informe o nome do professor
 *              example: 243
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    tags:
 *      - Students
 *    summary: Busca todos os estudantes
 *    description: Busca todos os estudantes
 *    responses:
 *      200:
 *        description: Lista de todos estudantes
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
 *        - Students
 *      summary: Busca estudante pela ID
 *      description: Busca estudante pela ID
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: id do estudante
 *          schema:
 *            type: integer
 *            format: int64
 *      responses:
 *        200:
 *          description: dados do estudante
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
 *                      idade:
 *                        type: string
 *                        description: Informe a idade
 *                        example: 20
 *                      nota_do_primeiro_semestre:
 *                        type: string
 *                        description: Informe a nota do primeiro semestre
 *                        example: 10
 *                      nota_do_segundo_semestre:
 *                        type: string
 *                        description: Informe a nota do segundo semestre
 *                        example: 10
 *                      nome_do_professor:
 *                        type: string
 *                        description: Informe o nome do professor
 *                        example: Arthur Severo
 *                      numero_da_sala:
 *                        type: string
 *                        description: Informe o nome do professor
 *                        example: 243
 *
 */
routes.get("/:id", findtUsersById);

/**
 * @swagger
 * /api/users/:
 *    post:
 *      tags:
 *        - Students
 *      description: Cria estudantes na API
 *      summary: Cria os dados dos estudantes
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
 *                idade:
 *                  type: string
 *                  description: Informe a idade
 *                  example: 20
 *                nota_do_primeiro_semestre:
 *                  type: string
 *                  description: Informe a nota do primeiro semestre
 *                  example: 10
 *                nota_do_segundo_semestre:
 *                  type: string
 *                  description: Informe a nota do segundo semestre
 *                  example: 10
 *                nome_do_professor:
 *                  type: string
 *                  description: Informe o nome do professor
 *                  example: Arthur Severo
 *                numero_da_sala:
 *                  type: string
 *                  description: Informe o nome do professor
 *                  example: 243
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
routes.post("/", createUsers);

/**
 * @swagger
 * /api/users/{id}:
 *    delete:
 *      tags:
 *        - Students
 *      summary: Remover um estudante
 *      description: Remover um estudante
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Estudante ID
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
 *        - Students
 *      summary: Atualiza dados dos alunos
 *      description: Atualiza dados dos alunos
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
 *                idade:
 *                  type: string
 *                  description: Informe a idade
 *                  example: 20
 *                nota_do_primeiro_semestre:
 *                  type: string
 *                  description: Informe a nota do primeiro semestre
 *                  example: 10
 *                nota_do_segundo_semestre:
 *                  type: string
 *                  description: Informe a nota do segundo semestre
 *                  example: 10
 *                nome_do_professor:
 *                  type: string
 *                  description: Informe o nome do professor
 *                  example: Arthur Severo
 *                numero_da_sala:
 *                  type: string
 *                  description: Informe o nome do professor
 *                  example: 243
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
routes.put("/:id", updateUsers);

module.exports = routes;
