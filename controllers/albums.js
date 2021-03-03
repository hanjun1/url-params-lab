module.exports = {
    index,
    show,
    show2,
}

const albumModel = require('../models/albumModel');

function index(req, res) {
    res.render('albums/index', {
        albumsArray: albumModel.getAlbums(),
    });
};

function show(req, res) {
    res.render('albums/show', {
        album: albumModel.getOneAlbum(req.params.id),
    });
};

function show2(req, res) {
    res.render('albums/show2', {
        album: albumModel.getOneAlbum(req.params.albumId),
        track: albumModel.getOneTrack(req.params.albumId, req.params.trackId),
    });
}