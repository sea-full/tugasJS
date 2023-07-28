# Set Up DB!

Atur DB nya di file root dengan file name:
.env.

Isi file tersebut dengan data berikut:

    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=
    DB_PORT=

# Command

Project Set Up

## Create Migration

    knex migrate:latest

## Create DB Seed

    knex seed:run
