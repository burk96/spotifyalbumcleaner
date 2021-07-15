const fs = require('fs');
const { albums } = require('./spotify.json');

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

  release_date = release_date.split('-')[0];

  const price = Math.floor(Math.random() * 29) * 100 + 99;

  const quantity = Math.floor(Math.random() * 300) + 1;

  const reorder = Math.floor(Math.random() * 20) + 5;

  cleanedAlbums.push({
    artists,
    genres,
    images,
    name,
    total_tracks,
    release_date,
    spotify,
    price,
    quantity,
    reorder,
  });
});

const payload = JSON.stringify(cleanedAlbums);

fs.writeFileSync('./seeddata.json', payload, 'utf8');
