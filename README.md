# AWS-Document-Analysis-Upload-API
An API to assist in document uploading to AWS S3.

## Features

**Server-side**
* [x] **[Node.JS](https://nodejs.org)** v10.x.x
* [x] **[Express](https://github.com/expressjs/express)**
* [x] [Cluster](https://nodejs.org/api/cluster.html)

**Client-side**
* [x] **[EJS](https://ejs.co/)**

**Debugging Tools**
* [x] [ESLint](https://eslint.org/) v5.x.x

## Usage

Install dependencies
```
$ npm install
```
or
```
yarn
```

For development
```bash
$ npm start
```

Run ESLint to check for ES6
```bash
$ npm run lint
```

Run ESLint to fix all fixable errors
```bash
$ npm run lint-fix
```

For production
```bash
$ npm run cluster
```

## Directory structure
```txt
+---configs
|   +---db
|       +---db_config.js
|       +---db_connection.js
|
+---.eslint.js
+---.gitignore
+---app.js
+---cluster.js
+---package-lock.json
+---package.json
+---readme.md
+---server.js

```

### How to connect to the Database(s) and make a save.

View controllers folder for an example of Querying and Mutations.
