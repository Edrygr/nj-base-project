# nj-base-project

Microservices Base project with Node js

## Features

Base projec to quick start your microservice develop with node js

- REST API
- Auth with Jwt validation
- Json mapper from request to a model
- Hash sha256 password encode for passwords

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
