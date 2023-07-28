/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync('Password', salt);

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      nik: '20230001',
      first_name: 'Saiful',
      last_name: 'Anwar',
      gender: 'Male',
      username: 'Saiful_A',
      job: 'Programmer',
      email: 'Saiful_A@gmail.com',
      phone: '081123132897',
      password: hashedPassword,
      image: '',
    },
    {
      nik: '20230002',
      first_name: 'Michael',
      last_name: 'Owen',
      gender: 'Male',
      username: 'Michael_O',
      job: 'Programmer',
      email: 'Michael_O@gmail.com',
      phone: '081123111111',
      password: hashedPassword,
      image: '',
    }
  ]);
};
