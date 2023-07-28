const express = require("express");
const Router = express.Router();
const {
    addLocation,
    showLocations,
} = require("../Models/LocationModel");


Router.post("/", (req, res) => {
    
    const newLocation = {
        rt: req.body.rt,
        rw: req.body.rw,
        kelurahan: req.body.kelurahan,
        kecamatan: req.body.kecamatan,
        city: req.body.city,
        province: req.body.province,
    }
  
    addLocation(newLocation)
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
    showLocations()
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