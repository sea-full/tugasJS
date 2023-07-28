const DB = require("../db/db");

const addUser = async (data) => {
  return await DB
    .table("users")
    .insert(data)
    .then((rows) => {
        return rows;
    })
    .catch((err) => console.log(err));
};


const showUsers = async () => {
  return await DB
    .from("users")
    .select(
      "id",
      "nik",
      "first_name",
      "last_name",
      "gender",
      "username",
      "job",
      "email",
      "phone",
      "image",
    )
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

module.exports = { addUser, showUsers };