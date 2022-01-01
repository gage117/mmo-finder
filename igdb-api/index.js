const axios = require('axios');
require("dotenv").config();

const initializeIGDBapi = async () => {
	const tokenRes = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`)
	axios.defaults.headers.common['Authorization'] = `Bearer ${tokenRes.data.access_token}`;
	axios.defaults.headers.common['Client-ID'] = process.env.IGDB_CLIENT_ID;
	const gamesRes = await axios({ // axios.post not working with this request, Need to use object with URL and method properties instead to get an authorized response
		method: "POST",
		url: "https://api.igdb.com/v4/games",
		data: "fields *, keywords.name; where game_modes = [5];"
	});
	console.log(gamesRes.data);
};

initializeIGDBapi();

module.exports = { axios };