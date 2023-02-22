[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/gcristia/nestjs-mongodb-docker/blob/main/README.md)
[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/gcristia/nestjs-mongodb-docker/blob/main/README.es.md)

# Nest.js + MongoDB + Docker

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

# Run in development

1. Have Nest CLI installed

```
npm i -g @nestjs/cli
```
2. Clone the repository
3. Run

```
yarn install
```

4. Up the database

```
docker-compose up -d
```

5. Clone the ```.env.template``` file and rename it to ```.env```
6. Populate the environment variables defined in the ```.env``` file
7. Run the app in dev:

```
yarn start:dev
```

8. Rebuild the database

```
http://localhost:3000/api/v2/seed
```

## Stack used

* MongoDB
* Nest
* Docker

## Expressions of Gratitude 🎁
* I am very grateful for everything I learned in the course [Nest: Desarrollo backend escalable con Node](https://www.udemy.com/course/nest-framework/) made by [Fernando Herrera](https://fernando-herrera.com/)
---
⌨️with ❤️by [gcristia](https://github.com/gcristia) 😊 