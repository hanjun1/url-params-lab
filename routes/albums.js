let express = require("express");
let router = express.Router();

// const albumModel = require('../models/albumModel');
const albumCtrl = require("../controllers/albums");

router.get("/", albumCtrl.index);

router.get("/new", albumCtrl.new);

router.get("/:id", albumCtrl.show);

router.post("/", albumCtrl.create);

router.get("/:albumId/new", albumCtrl.newTrack);

router.get("/:albumId/:trackId", albumCtrl.show2);

router.post("/:id", albumCtrl.createTracks);

module.exports = router;
