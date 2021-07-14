const fs = require("fs");
const { albums } = require("./spotify.json");

const cleanedAlbums = [];

albums.forEach((album) => {
  let {
    artists,
    genres,
    images,
    name,
    total_tracks,
    release_date,
    external_urls: { spotify },
  } = album;

  artists = artists[0].name;

  cleanedAlbums.push({
    artists,
    genres,
    images,
    name,
    total_tracks,
    release_date,
    spotify,
  });
});

const payload = JSON.stringify(cleanedAlbums);

fs.writeFileSync("./seeddata.json", payload, "utf8");
