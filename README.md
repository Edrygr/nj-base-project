# nj-base-project

Microservices Base project with Node js

## Features

Base projec to quick start your microservice develop with node js

- REST API
- Auth with Jwt validation
- Json mapper from request to a model
- Hash sha256 password encode for passwords
- MariaDb integration

## Installation

Install nj-base-project with npm

```bash
  npm install
```

## Runing

To run this project run

#### Develop mode

```bash
  npm run start-dev
```

#### Production mode

```bash
  npm run start-prod
```

## Environment Variables

This project is prepare to run with diferent environment files, right now has by default two files ".env.development" and ".env.production"

`ENV_NAME`: Environment name will be checked on consoles on startup

`PORT`: Project run port will be checked on consoles on startup

`TOKEN_KEY`: Jwt seed to generate auth Jwt bearer token

`TOKEN_EXP`: Jwt expiration time

`EXCLUDE_SECURITY_PATHS`: Excluded path from Jwt validation

## API Reference

#### Get all items

```http
  POST /auth/login
```

| Parameter  | Type     | Description                  |
| :--------- | :------- | :--------------------------- |
| `user`     | `string` | **Required**. Your user name |
| `password` | `string` | **Required**. Your password  |

#### Get item

```http
  POST /auth/signup
```

| Parameter  | Type     | Description                  |
| :--------- | :------- | :--------------------------- |
| `user`     | `string` | **Required**. Your user name |
| `password` | `string` | **Required**. Your password  |

## Database

### Features

Added integration with MariaD

#### Environment Variables

- DB_HOST = localhost
- DB_PORT = 3306
- DB_USER = root
- DB_PASSWORD = password
- DB_NAME = db-name
- DB_POOL_LIMIT_CONNECTONS = 10

#### Start up SQL scripts
in root folder can found a file named base_database.sql in it you can put all start up scrit that will run on the aplication start.

- Not suported line breaks


