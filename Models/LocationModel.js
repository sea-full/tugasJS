const DB = require("../db/db");

const addLocation = async (data) => {
    return await DB
      .table("locations")
      .insert(data)
      .then((rows) => {
          return rows;
      })
      .catch((err) => console.log(err));
};

const showLocations = async () => {
    return await DB
        .from("locations")
        .select("*")
        .then((rows) => {
            return rows;
        })
        .catch((err) => console.log(err));
};

module.exports = { addLocation, showLocations };
