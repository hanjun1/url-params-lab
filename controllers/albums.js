module.exports = {
  index,
  new: newAlbum,
  newTrack,
  create,
  createTracks,
  show,
  show2,
};

const albumModel = require("../models/albumModel");

function index(req, res) {
  res.render("albums/index", {
    albumsArray: albumModel.getAlbums(),
  });
}

function newAlbum(req, res) {
  res.render("albums/new");
}

function newTrack(req, res) {
  res.render("albums/new-track", {
    albumId: req.params.albumId,
  });
}

function create(req, res) {
  albumModel.addAlbum(req.body.name, req.body.artist);
  res.redirect("/albums");
}

function createTracks(req, res) {
  albumModel.addTrack(req.params.id, req.body.trackName);
  res.redirect(`/albums/${req.params.id}`);
}

function show(req, res) {
  res.render("albums/show", {
    album: albumModel.getOneAlbum(req.params.id),
  });
}

function show2(req, res) {
  res.render("albums/show2", {
    album: albumModel.getOneAlbum(req.params.albumId),
    track: albumModel.getOneTrack(req.params.albumId, req.params.trackId),
  });
}
