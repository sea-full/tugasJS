/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('voting_places').del()
  await knex('voting_places').insert([
    {
      location_id: 1, 
      name: 'TPS 001',
    },
  ]);
};
