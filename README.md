### AvaliacaofilmesWeb

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.1.

## Servidor de desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue para `http://localhost:4200/`.

## Build

Execute `ng build` para compilar o projeto. Os artefatos de build serão armazenados no diretório `dist/`.

## Executando testes unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando a aplicação com Docker Compose

Para executar a aplicação Angular e a API usando Docker Compose, siga estes passos:

1. Certifique-se de ter o [Docker](https://www.docker.com/products/docker-desktop) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados.

2. Clone o repositório e navegue até o diretório do projeto.

    ```sh
    git clone https://github.com/williamsilvaec/avaliacaofilmes-web.git
    cd avaliacaofilmes-web
    ```

3. Execute o Docker Compose para iniciar tanto a API quanto a aplicação Angular.

    ```sh
    docker compose up
    ```

4. Abra seu navegador e navegue para `http://localhost:8080` para acessar a aplicação Angular. A API estará acessível em `http://localhost:8085`.

5. Para parar os containers, pressione `Ctrl+C` no terminal onde `docker-compose up` está sendo executado.

6. Para remover os containers, redes e volumes criados pelo `docker-compose up`, execute:

    ```sh
    docker compose down
    ```
