let express = require('express');
let router = express.Router();

// const albumModel = require('../models/albumModel');
const albumCtrl = require('../controllers/albums');

router.get('/', albumCtrl.index);

router.get('/:id', albumCtrl.show);

router.get('/:albumId/:trackId', albumCtrl.show2);

module.exports = router;