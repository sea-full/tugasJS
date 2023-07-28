/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('registrations', function(table) {
        table.increments("id").primary()
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('voting_place_id').unsigned().notNullable();
        table.foreign('voting_place_id').references('id').inTable('voting_places');
        table.string('status', 255).notNullable()
        table.string('remarks', 255).nullable()
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('registrations');
};
