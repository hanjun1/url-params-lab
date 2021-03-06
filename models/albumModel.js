module.exports = {
  getAlbums,
  addAlbum,
  addTrack,
  getOneAlbum,
  getOneTrack,
};

let albumsArray = [
  {
    id: "a01",
    name: "Thriller",
    artist: "Michael Jackson",
    tracks: [
      { id: "t01", name: "Thriller" },
      { id: "t02", name: "Blood on the Dance Floor" },
      { id: "t03", name: "Dangerous" },
      { id: "t04", name: "Ghosts" },
    ],
  },
  {
    id: "a02",
    name: "Baby One More Time",
    artist: "Britney Spears",
    tracks: [
      { id: "t01", name: "...Baby One More Time" },
      { id: "t02", name: "Sometimes" },
      { id: "t03", name: "Soda Pop" },
      { id: "t04", name: "I Will Be There" },
    ],
  },
  {
    id: "a03",
    name: "Ladies' Night",
    artist: "Kool & the Gang",
    tracks: [
      { id: "t01", name: "Domino" },
      { id: "t02", name: "Confident" },
      { id: "t03", name: "Holler" },
      { id: "t04", name: "Good For You" },
    ],
  },
];

function addAlbum(name, artist) {
  let id = "a";
  if (albumsArray.length < 10) {
    id += "0" + (albumsArray.length + 1);
  } else {
    id += albumsArray.length + 1;
  }
  let album = {
    id,
    name,
    artist,
    tracks: [],
  };
  albumsArray.push(album);
}

function addTrack(albumId, name) {
  let album = getOneAlbum(albumId);
  let id = "t";
  if (album.tracks.length < 10) {
    id += "0" + (album.tracks.length + 1);
  } else {
    id += album.tracks.length + 1;
  }
  let track = {
    id,
    name,
  };
  album.tracks.push(track);
}

function getAlbums() {
  return albumsArray;
}

function getOneAlbum(id) {
  return albumsArray.find((album) => album.id === id);
}

function getOneTrack(albumId, trackId) {
  let album = albumsArray.find((album) => album.id === albumId);
  return album.tracks.find((track) => track.id === trackId);
}
