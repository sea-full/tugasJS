/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('locations').del()
  await knex('locations').insert([
    {
      rt: '001',
      rw: '005',
      kelurahan: 'Senayan',
      kecamatan: 'Kebayoran',
      city: 'Jakarta Selatan',
      province: 'DKI Jakarta',
    },
  ]);
};
