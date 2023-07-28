const express = require("express");
const Router = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const {
    addUser,
    showUsers,
} = require("../Models/UserModel");


Router.post("/", (req, res) => {
    
    const newUser = {
        nik: req.body.nik,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        username: req.body.username,
        job: req.body.job,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, salt),
        image: req.body.image,
    }
  
    addUser(newUser)
      .then((result) => {
        res.status(201).json({
            message: "Data has been submitted successfully",
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
    showUsers()
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