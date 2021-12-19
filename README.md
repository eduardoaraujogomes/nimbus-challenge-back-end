# Desafio Nimbus - Back-End

![banner](https://i.imgur.com/ojyyIIk.jpg)


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/eduardoaraujogomes/nimbus-challenge-back-end?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/eduardoaraujogomes/nimbus-challenge-back-end">

  <a href="https://github.com/eduardoaraujogomes/nimbus-challenge-back-end/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/eduardoaraujogomes/nimbus-challenge-back-end">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>

_________

## 💻 Sobre o projeto

:cloud: Nimbus - Previsão de Chuva.

## Enunciado:
 Desenvolver uma API com os endpoints necessários para:
- Listar os dados na tela
- Criar novos dados (deve ser utilizado apenas diretamente pela API)

## Pré-requisito eliminatório:
- Subir o projeto para repositórios públicos do GitHub e enviar seus links
## Diferenciais (não obrigatórios):
- Uso de banco de dados relacional
- Deploy da aplicação (backend e frontend) - enviar o(s) link(s) de acesso por e-mail
- API desenvolvida com NodeJS
- Tela desenvolvida com ReactJS
- Tela responsiva

_________

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do Back-end:
 
- [JavaScript]

- [Express]
- [Nodemon]
- [cors]
- [pg]
- [express-async-erros]

- [yarn]
- [eslint]
- [editorconfig]

- [Insomnia]
- [Heroku]
- [Postgres]

- Programado no [Visual Studio Code].

_________

## 🚀 Como executar o projeto

    # Clone esse repositório
    $ git clone https://github.com/eduardoaraujogomes/nimbus-challenge-back-end.git
    
    # Instalar dependências
    $ yarn
    
    # Executar
    $ yarn dev
   
    
    

_________


## 👨‍💻 Acessar o projeto

    # Pelo Link
    $ https://nimbus-back-end.herokuapp.com/forecasts   
   
 
    
    

_________

## 🤩 Como fazer as requisições
GET - Forecasts 

Digite no browser/insomnia/postman a URL:
```
https://nimbus-back-end.herokuapp.com/forecasts
```

GET - Locations 

Digite no browser/insomnia/postman a URL:
```
https://nimbus-back-end.herokuapp.com/locations
```

### Para fazer o POST é preciso utilizar o Insomnia ou o Postman para fazer o POST

POST - Locations
```
https://nimbus-back-end.herokuapp.com/locations

JSON BODY
```
```json
{
  "neighbourhood": "Flamengo",
  "state": "RJ"
}
```

POST - Forecasts
```
https://nimbus-back-end.herokuapp.com/forecasts

JSON BODY
```
```json

{		
  "day": "08/12",
  "hour": "18h",
  "millimeters": 4,
  "id_locations": "8fb135b2-b514-4df4-ab42-fd0dce8bb535"
}

```




## 💡 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com).
Além disto é bom ter um editor para trabalhar com o código como [Visual Studio Code].

_________ 

## 📝 Licença

O projeto se encontra sob licença MIT.

Para mais detalhes, acesse [license](LICENSE).


Feito com 💙 por **Eduardo de Araújo** 👻.

 
[JavaScript]: https://www.javascript.com/  

[Express]: https://expressjs.com/
[Nodemon]: https://www.npmjs.com/package/nodemon
[cors]: https://www.npmjs.com/package/cors
[pg]: https://www.npmjs.com/package/pg
[express-async-erros]: https://www.npmjs.com/package/express-async-errors
[yarn]: https://yarnpkg.com/
[eslint]: https://eslint.org/
[editorconfig]: https://editorconfig.org/
[Postgres]: https://www.postgresql.org/about/
[Heroku]: https://dashboard.heroku.com/
[Insomnia]: https://insomnia.rest/

[Visual Studio Code]: https://code.visualstudio.com/ 
