const express = require("express");
const Router = express.Router();
const {
    addVotingPlace,
    showVotingPlaces,
} = require("../Models/VotingPlaceModel");


Router.post("/", (req, res) => {
    
    const newVotingPlace = {
        location_id: req.body.location_id,
        name: req.body.name,
        image: req.body.image,
    }
  
    addVotingPlace(newVotingPlace)
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
    showVotingPlaces()
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