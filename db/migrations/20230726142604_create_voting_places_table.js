/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('voting_places', function(table) {
        table.increments("id").primary()
        table.integer('location_id').unsigned().notNullable();
        table.foreign('location_id').references('id').inTable('locations');
        table.string('name', 255).notNullable()
        table.string('image', 255).nullable()
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('voting_places');
};
