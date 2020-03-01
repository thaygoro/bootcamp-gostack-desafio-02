import { Router } from 'express';

const routes = new Router();

/*
  Rotas para:
  - Autenticação de usuário com email e senha; POST
  - Cadastro de destinatarios; POST
  - Atualização de destinatarios; PUT
  - Listar destinarios cadastrados; GET
*/

/* Cadastra usuário administrador */
routes.post('/users');

/* Autentica usuário administrador */
routes.post('/sessions');

/* Cadastra destinatário */
routes.post('/recipient');

/* Atualiza destinatário */
routes.put('/recipient');

/* Lista destinatários */
routes.get('/recipient');

export default routes;