/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('locations', function(table) {
        table.increments("id").primary()
        table.string('rt', 255).notNullable()
        table.string('rw', 255).notNullable()
        table.string('kelurahan', 255).notNullable()
        table.string('kecamatan', 255).notNullable()
        table.string('city', 255).notNullable()
        table.string('province', 255).notNullable()
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('locations');
};
