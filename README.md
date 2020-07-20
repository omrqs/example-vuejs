<div align="center">
    <h1 align="center">Vue.js Example</h1>
</div>

## Author

**Nome:** `Otávio Marques`

**E-mail:** `otaviomarques@gmail.com`

**Usuário:** @omrqs

## Apresentação

Este repositório visa demonstrar o desenvolvimento de uma interface utilizando o framework Vue.js e seu ecossitema, consumindo endpoints fornecidos no [repositório de API](https://github.com/omrqs/example-symfony).

Possui dois CRUD's (state e city) com as operações básicas, validações, paginação e filtragem de registros. Estes endpoints são consumdis com autenticação, conforme especificado via openAPI [repositório de API](https://github.com/omrqs/example-symfony).

A aplicação é coberta por testes utilizando phpunit, grumphp, phpstan e está gerando relatórios de cobertura com o clover.

## Começando

Clone este repositório, crie uma nova _branch_, como por exemplo `vue-example`.

Na sua máquina, você só precisa ter o node [sugiro usar o NVM](https://github.com/nvm-sh/nvm) e o [npm] instalados.

Para rodar a primeira vez o repositório, basta usar os comandos abaixo na raiz do projeto. Ele ira configurar a aplicação.
Garanta que a porta `8080` de sua máquina não esteja sendo utilizada e rode o comando abaixo:

```bash
npm i
npm run setup
```

Para rodar a aplicação, você pode usar a task do npm.

```bash
npm run serve
```

A partir daqui, está tudo configurado :rocket:

Assim, será possível acessar a aplicação em [http://localhost:8080](http://localhost:8080).

## Testando

Para rodar os testes da aplicação, utilize as tasks abaixo, que utilizam o [jest](https://jestjs.io/):

```bash
npm run test:unit
npm run test:spec
```
---

Caso deseje rodar todas as checagens de qualidade de código, rode o comando abaixo:

```bash
npm run test:coverage
```

Para checar em detalhes a cobertura de código da aplicação, após rodar o _coverage_,
abra o arquivo `coverage/lcov-report/index.html` em seu navegador.
