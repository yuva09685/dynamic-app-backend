  require('dotenv').config()
  const config = 

{
  "development": {
    username: process.env.USERNAME || "postgres",
    password: process.env.PASSWORD || "root",
    database: process.env.DATABASE || "postgres",
    host: process.env.HOST || "localhost",
    dialect: process.env.DIALECT || "postgres",
  },
  "test": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
}

module.exports = config ;