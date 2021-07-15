# Planet Farms

Planet Farms is a system built in PERN Stack.
This stack consists of [PostgreSQL](https://www.postgresql.org/), [Express](https://expressjs.com/), [React](https://reactjs.org/) and [Node.js](https://nodejs.org/en/)

## Getting Started

After you clone the repository. You can create or edit `.env` file and add `REACT_APP_API_BASE_URL = http://127.0.0.1:5000` as environment variable.

### `npm install`

Make sure you have **NodeJS 14.x** or higher

You can install dependencies by `npm install` in your Frontend and after that you can go to Backend by `cd api` and `npm install` to install dependencies in your Backend.

### `npm start`

Runs only Frontend in the development mode.\
You can enter `npm start` in the base directory.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs only Backend in the development mode.\
You can go to Back by `cd api` and enter `npm start`.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

Runs Backend as well as Frontend in the development mode.\
You can enter `npm run dev` in the base directory.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### environment

Copy `.env.example` to `.env` file for frontend
```
REACT_APP_API_BASE_URL=<URL for API server>
REACT_APP_CDN_BASE_URL=<URL for File server>
```

Copy also `.env.example` to `.env` file within api folder
```
JWT_SECRET=<secret for token>
DATABASE_NAME=<database name>
DATABASE_USERNAME=<database username>
DATABASE_PASSWORD=<database password>
DATABASE_HOST=<database server>
FRONTEND_URL=<url of your frontend>
AUTH_METHOD=<**local** or **cognito**>
COGNITO_REGION=<required only if using cognito auth method>
COGNITO_POOL_ID=<required only if using cognito auth method>
COGNITO_CLIENT_ID=<required only if using cognito auth method>
COGNITO_DOMAIN_NAME=<required only if using cognito auth method>
```

### `initial setup`

If you are running cognito authentication then you need to copy file from https://cognito-idp.{region}.amazonaws.com/{poolId}/.well-known/jwks.json
 and save it under **api/src/middleware** folder

### `docker-compose up`

[Docker](https://www.docker.com/) is a software platform for building applications based on containers — small and lightweight execution environments that make shared use of the operating system kernel but otherwise run in isolation from one another.

To run docker first you need to install docker on your computer after than enter `docker-compose up` which will pull the latest images.

### `npx sequelize-cli db:migrate`

[Sequelize](https://sequelize.org/) is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

Now to actually create that table in database you need to run `npx sequelize-cli db:migrate` command. This command will create tables
When you are setting up new community please run following seed which will provide required data
`npx sequelize-cli db:seed --seed 20210615104502-categories.js`
`npx sequelize-cli db:seed --seed 20210608081218-communities.js`

For testing environment you can seed all databases by running `npx sequelize-cli db:seed:all`.

### `npx standard --fix`

[Standard JS](https://standardjs.com) is the easiest way to enforce code quality in your project.

Just run `npx standard --fix` and say goodbye to messy or inconsistent code. For linting specific file run `npx standard --fix "path_of_file_or_folder"`
