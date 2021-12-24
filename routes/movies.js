const express = require("express");
const router = express.Router();
const crtl = require("../controllers/movies");

// router.get("/", createMovie);
// router.get("/", controller);
// router.get("/movies", crtl.controller);
router.post("/movies", crtl.createMovie);

module.exports = router;
