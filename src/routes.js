import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/*
  Rotas para:
  - Autenticação de usuário com email e senha; POST
  - Cadastro de destinatarios; POST
  - Atualização de destinatarios; PUT
  - Listar destinarios cadastrados; GET
*/

/* Cadastra usuário administrador */
routes.post('/users', UserController.store);

/* Autentica usuário administrador */
routes.post('/sessions', SessionController.store);

/*
  Utiliza o authMiddleware para permitir que apenas
  usuário logado possa utilizar as próximas rotas
*/
routes.use(authMiddleware);

/* Cadastra destinatário */
routes.post('/recipient', RecipientController.store);

/* Atualiza destinatário */
routes.put('/recipient', RecipientController.update);

/* Lista destinatários */
routes.get('/recipient', RecipientController.index);

export default routes;
