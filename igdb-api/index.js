const IGDB_api = require('axios');
require("dotenv").config();

const initializeIGDBapi = async () => {
	const tokenRes = await IGDB_api.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`)
	IGDB_api.defaults.headers.common['Authorization'] = `Bearer ${tokenRes.data.access_token}`;
	IGDB_api.defaults.headers.common['Client-ID'] = process.env.IGDB_CLIENT_ID;
  console.log("IGDB API initialized");
};

// Custom methods:
IGDB_api.getAllMMOGames = () => {
  return IGDB_api.request({
    method: "POST",
    url: "https://api.igdb.com/v4/games",
    data: "fields *, keywords.name, cover.url; where game_modes = [5];"
  }) 
}
IGDB_api.getGameByName = (gameName) => {
  return IGDB_api.request({
    method: "POST",
    url: "https://api.igdb.com/v4/games",
    data: `fields *, keywords.name, cover.url; where name = "${gameName}";`
  }) 
}
//! TODO: Implement in API.js for GET /api/mmo/:id
IGDB_api.getGameByID = (gameID) => {
  return IGDB_api.request({
    method: "POST",
    url: "https://api.igdb.com/v4/games",
    data: `fields *, keywords.name, cover.url; where id = ${gameID};`
  })
}

module.exports = { IGDB_api, initializeIGDBapi };