// Update with your config settings.
require("dotenv").config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

    development: {
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          port: process.env.DB_PORT || 3306,
        },
        migrations: {
          directory: "./db/migrations",
        },
        seeds: {
            directory: './db/seeds'
        },
    },
  
    staging: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
  
    production: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user:     'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
  
  };
  