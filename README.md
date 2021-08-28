# DesafioHVEX
Desafio proposto para vaga de desenvolvedor web back-end JR

## ℹ Como usar
Para rodar essa aplicação, você vai precisar de [Git](https://git-scm.com/) e [Nodejs](https://nodejs.org/en/) instalado no seu computador.

Dentro do seu terminal, digite:
``` bash
# Clonar o repositório
git clone https://github.com/DaviSisnando/desafioHVEX.git

# Instalar as dependências
npm i

# Rodar o programa
node src/app.js

# App listening on port 6001!
# Application connected to database!
```

## Como usar as rotas
Dentro do [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), ou qualquer outro aplicativo que realize http requests, podemos verificar e testar as rotas que foram criadas para essa API.

### Rotas para a criação de usuário:
É necessário utilizar o método POST para a url:

http://localhost:6001/users 

Para o body da requisição, do tipo JSON, devemos informar os atributos ***name***, ***username*** e ***password***, pois são requisitos obrigatórios no banco de dados. Segue um exemplo de criação abaixo:
``` json 
{
	"name": "joao",
	"username": "joao",
	"password": "joao"
}
```

## Rotas para acessar os dados do usuário:
É necessário utilizar o método GET para as seguintes urls:
http://localhost:6001/users

http://localhost:6001/users/***identificador do usuário***

Para a primeira rota, ela simplesmente retorna todos os usuários que estão cadastrados no banco.

Para a segunda rota, é necessário passar o identificador do usuário, que você consegue obter ao fazer a requisição para a primeira rota mencionada anteriormente. Ademais, a data de acesso do usuário é atualizada.

## Rota para atualizar os dados do usuário:
É necessário utilizar o método PUT para a url:
http://localhost:6001/users/***identificador do usuário***

Para o body da requisição, do tipo JSON, devemos informar o atributo que queremos atualizar no banco de dados, podendo ser: ***name***, ***username***, ***password***. Segue um exemplo abaixo:
``` json
{
	"name": "alexandre",
	"password": "alexandre"
}
```

## Rota para deletar o usuário:
É necessário utilizar o método DELETE para a url:
http://localhost:6001/users/***identificador do usuário***

Depois de passars o identificador do usuário, o retorno da resposta mostra os dados do usuário que acabou de ser deletado.