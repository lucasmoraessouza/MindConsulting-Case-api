# MindConsulting-Case-api

Sistema web feito para cadastrar e gerenciar usuários por nivel de acesso, utilizando autenticação, conexão com a base de dados MySQL.
Nivel de acesso administrativo (999) - Tem acesso a listagem, desativação e alteração dos usuarios cadastrados.
Nivel de acesso Comum (1) - Tem acesso somente a seu perfil, podendo modifica-lo.
Nivel de acesso desabilitado (0) - Não tem acesso a plataforma.

## Importante

- Necessario todas as dependencias do projeto

### Requisitos

- NodeJs
- Yarn

### Iniciando

```
$ git clone https://github.com/lucasmoraessouza/MindConsulting-Case-api.git
```

```
$ cd MindConsulting-Case-api
```

```
$ yarn install
```

```
$ yarn dev
```

### Rotas

- http://localhost:4000/login [POST] (Fazer login no sistema com E-mail ou CPF)

- http://localhost:4000/register [POST] (Criar uma conta no sistema utilizando Nome, Cpf, E-mail e Senha)

- http://localhost:4000/users [GET] (Listar usuários cadastrados no sistema.)

- http://localhost:4000/user/:id [GET] (Listar dados de um único usuario pelo ID)

- http://localhost:4000/user/:id [DELETE] (Excluir usuário pelo ID)

- http://localhost:4000/user/:id [PUT] (Atualizar dados de um único usuario pelo ID)

- http://localhost:4000/desative/:id [PUT] (Desativar usuario pelo ID)

- http://localhost:4000/active/:id [PUT] (Ativar um usuário pelo ID)

## Autores

**Lucas de Moraes Souza**

## Agradecimentos

- Mind Consulting
