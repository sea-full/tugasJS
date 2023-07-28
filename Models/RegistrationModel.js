const DB = require("../db/db");

const register = async (data) => {
    return await DB
        .table("registrations")
        .insert(data)
        .then((rows) => {
            return rows;
        })
        .catch((err) => console.log(err));
};


const showRegistrations = async () => {
    return await DB
        .from("registrations")
        .select("*")
        .then((rows) => {
        return rows;
        })
        .catch((err) => console.log(err));
};

module.exports = { register, showRegistrations };