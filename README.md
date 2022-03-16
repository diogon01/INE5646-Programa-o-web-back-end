# SCVANT: Back-End
 A estrutura de back-end para Node.js do sistema é escrita em TypeScript, utilizando o framework AdonisJS.

## Configurando o banco de dados:
Edite o arquivo `.env.example` com as configurações do banco de dados local, depois renome para `.env`:

```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=I4HOfkbt7sDvK-05YGamKD9y3HhlybsI
DRIVE_DISK=local
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=123
PG_DB_NAME=postgres
```

## Instalando as dependências

Execute o comando `npm i` na pasta raiz do projeto, para instalar as denpendências e o drive do banco postgresql

## Criar as tabelas no banco (migrations)
Execute o comando `node ace migration:run`, este comando vai criar as tabelas automaticamente no banco de dados.

Para verificar se a criação das tabelas foram feitas corretamente, execute o comando `node ace migration:status`

```
┌─────────────────────────────────────────────────────────┬───────────┬───────┬─────────┐
│ Name                                                    │ Status    │ Batch │ Message │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647363908393_users                 │ completed │ 1     │         │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647363908403_api_tokens            │ completed │ 1     │         │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647375619433_gimbals               │ completed │ 1     │         │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647376124022_aircraft              │ completed │ 1     │         │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647376766613_chargers              │ completed │ 1     │         │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647376992136_gimball_installations │ completed │ 1     │         │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647467458209_charger_aircrafts     │ completed │ 1     │         │
├─────────────────────────────────────────────────────────┼───────────┼───────┼─────────┤
│ database/migrations/1647470088482_gimbal_aircrafts      │ completed │ 2     │         │
└─────────────────────────────────────────────────────────┴───────────┴───────┴─────────┘

```
## Populando o banco de dados (seeds)
Para popular o banco de dados da aplicação execute o comando `node ace db:seed`

## Iniciando o servidor

Execute o comando `node ace serve --watch`

```
╭─────────────────────────────────────────────────╮
│                                                 │
│    Server address: http://127.0.0.1:3333        │
│    Watching filesystem for changes: YES         │
│                                                 │
╰─────────────────────────────────────────────────╯
```

## Exiber rotas disponiveis
Execute o comando `node ace list:routes`

```
┌────────────┬───────────────┬────────────────────────────┬────────────┬───────────────────┐
│ Method     │ Route         │ Handler                    │ Middleware │ Name              │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /uploads/*    │ Closure                    │            │ drive.local.serve │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /             │ Closure                    │            │                   │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /usuario      │ UsersController.index      │            │ usuario.index     │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ POST       │ /usuario      │ UsersController.store      │            │ usuario.store     │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /usuario/:id  │ UsersController.show       │            │ usuario.show      │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ PUT, PATCH │ /usuario/:id  │ UsersController.update     │            │ usuario.update    │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ DELETE     │ /usuario/:id  │ UsersController.destroy    │            │ usuario.destroy   │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /aeronave     │ AircraftController.index   │            │ aeronave.index    │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ POST       │ /aeronave     │ AircraftController.store   │            │ aeronave.store    │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /aeronave/:id │ AircraftController.show    │            │ aeronave.show     │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ PUT, PATCH │ /aeronave/:id │ AircraftController.update  │            │ aeronave.update   │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ DELETE     │ /aeronave/:id │ AircraftController.destroy │            │ aeronave.destroy  │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /bateria      │ ChargersController.index   │            │ bateria.index     │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ POST       │ /bateria      │ ChargersController.store   │            │ bateria.store     │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /bateria/:id  │ ChargersController.show    │            │ bateria.show      │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ PUT, PATCH │ /bateria/:id  │ ChargersController.update  │            │ bateria.update    │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ DELETE     │ /bateria/:id  │ ChargersController.destroy │            │ bateria.destroy   │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /gimbal       │ GimbalsController.index    │            │ gimbal.index      │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ POST       │ /gimbal       │ GimbalsController.store    │            │ gimbal.store      │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ HEAD, GET  │ /gimbal/:id   │ GimbalsController.show     │            │ gimbal.show       │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ PUT, PATCH │ /gimbal/:id   │ GimbalsController.update   │            │ gimbal.update     │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ DELETE     │ /gimbal/:id   │ GimbalsController.destroy  │            │ gimbal.destroy    │
├────────────┼───────────────┼────────────────────────────┼────────────┼───────────────────┤
│ POST       │ /login        │ UsersController.login      │            │                   │
└────────────┴───────────────┴────────────────────────────┴────────────┴───────────────────┘
```

## Documentação oficial

Para mais informações ou mais ajuda com o AdonisJS V5 execute `node ace` ou verifique a documentação [A fully featured web framework for Node.js](https://adonisjs.com/).
