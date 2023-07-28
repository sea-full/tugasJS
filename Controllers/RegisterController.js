const express = require("express");
const Router = express.Router();
const {
    register,
    showRegistrations,
} = require("../Models/RegistrationModel");


Router.post("/", (req, res) => {
    const newRegister = {
        user_id: req.body.user_id,
        voting_place_id: req.body.voting_place_id,
        status: req.body.status,
        remarks: req.body.remarks,
    }
  
    register(newRegister)
        .then((result) => {
            res.status(201).json({
                message: "Registration success",
                rows: result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "MySQL syntax error",
            });
        });
});

Router.get("/", (req, res) => {
    showRegistrations()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(404).json({
                message: "Error occured",
            });
        });
});

module.exports = Router;