module.exports = {
  "development": {
    "username": "yubtan",
    "password": null,
    "database": "kydis_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_PROD_USERNAME,
    "password": process.env.DB_PROD_PASSWORD,
    "database": process.env.DB_PROD_DATABASE,
    "host": "127.0.0.1",
    "dialect": process.env.DB_PROD_DIALECT
  }
}
