const express = require("express");
const cors = require("cors");
const app = express();

const UserController = require("./Controllers/UserController");
const LocationController = require("./Controllers/LocationController");
const VotingPlaceController = require("./Controllers/VotingPlaceController");
const RegisterController = require("./Controllers/RegisterController");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use("/api/users", UserController);
app.use("/api/locations", LocationController);
app.use("/api/voting-places", VotingPlaceController);
app.use("/api/registrations", RegisterController);

// Listener
app.listen(8000, () => {
    console.log("Aplikasi terhubung di Port 8000")
});