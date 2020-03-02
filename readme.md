<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="./logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 2: FastFeet, o início
</h3>

<h3 align="center">
  :warning: Etapa 1/4 do Desafio Final :warning:
</h3>

<p>Esse [desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-02) faz parte do Desafio Final do bootcamp GoStack da [Rocketseat](https://rocketseat.com.br/), ele consiste em criar uma aplicação completa (Back-end, Front-end e Mobile) que no final é avaliada para emissão do Certificado do Bootcamp.</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ferramentas-utilizadas">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-rodar">Como rodar</a>
</p>

## :rocket: **Sobre o desafio**

A aplicação desenvolvida nesse desafio é um app para uma transportadora fictícia, o FastFeet. Nesse primeiro desafio são criadas algumas funcionalidades básicas:

### Autenticação:

- Permitir que um usuário se autentique na aplicação utilizando e-mail e uma senha;
- A autenticação deve ser feita utilizando JWT;
- Realize a validação dos dados de entrada;

### Gestão de destinatários:

- Permitir que destinatários sejam mantidos (cadastrados/atualizados) na aplicação, e esses devem ter o **nome** do destinatário e campos de endereço: **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**;
- Utilizar uma nova tabela no banco de dados chamada `recipients` para guardar informações do destinatário;
- O cadastro de destinatários só pode ser feito por administradores autenticados na aplicaçã;
- O destinatário não pode se autenticar no sistema, ou seja, não possui senha;

## **Ferramentas utilizadas**

Você deverá criar a aplicação do zero utilizando o [Express](https://expressjs.com/), além de precisar configurar as seguintes ferramentas:

- [Express](https://expressjs.com/);
- [Sucrase](https://github.com/alangpierce/sucrase) + [Nodemon](https://nodemon.io/);
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [EditorConfig](https://editorconfig.org/);
- [Sequelize](https://sequelize.org/) + [PostgreSQL](https://www.postgresql.org/):
  - Migrations;
  - Seeds;


## **Como rodar**

Requisitos:
- Ter [docker](https://www.docker.com/) instalado;
- No docker, instalar uma instância para o [PostgresSQL](https://hub.docker.com/_/postgres) e roda-la;
- Editar o arquivo `/src/config/database.js` com as informações de acesso do seu banco de dados;

Clone esse diretório:

    git clone https://github.com/thaygoro/bootcamp-gostack-desafio-02

Instale as dependências:

    yarn

Rode a aplicação:

    yarn dev

Para testar utilize:
- [Insomnia](https://insomnia.rest/):
  - Utilize as rotas do arquivo `/src/routes.js` para testar a autenticação do usuário e cadastro/atualização de destinatários;
- [Postbird](https://github.com/Paxa/postbird):
  - Teste as atualiações do banco de dados;

---

:rocket: Developed by [Tháygoro](https://github.com/thaygoro) :rocket:
