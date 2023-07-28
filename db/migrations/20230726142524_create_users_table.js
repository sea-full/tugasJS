/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
            table.increments("id").primary()
            table.string('nik', 255).notNullable()
            table.string('first_name', 255).notNullable()
            table.string('last_name', 255).notNullable()
            table.string('gender', 255).notNullable()
            table.string('username', 255).notNullable()
            table.string('job', 255).notNullable()
            table.string('email', 255).notNullable()
            table.string('phone', 255).notNullable()
            table.string('password', 255).notNullable()
            table.string('image', 255).nullable()
            table.timestamps(true, true);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
