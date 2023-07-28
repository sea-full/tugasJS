const DB = require("../db/db");

const addVotingPlace = async (data) => {
    return await DB
      .table("voting_places")
      .insert(data)
      .then((rows) => {
          return rows;
      })
      .catch((err) => console.log(err));
};

const showVotingPlaces = async () => {
    return await DB
        .from("voting_places")
        .select("*")
        .then((rows) => {
            return rows;
        })
        .catch((err) => console.log(err));
};

module.exports = { addVotingPlace, showVotingPlaces };