const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`)
	.then(res => {
		axios({ // axios.post not working with this request, Need to use object with URL and method properties instead to get an authorized response
			method: "POST",
			url: "https://api.igdb.com/v4/games",
			headers: {
					'Client-ID': process.env.IGDB_CLIENT_ID,
					Authorization: `Bearer ${res.data.access_token}`,
			},
			data: "fields *, keywords.name; where game_modes = [5];"
		})
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		})
	})
	.catch(err => {
		console.log(err);
	});

const config = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mmo_finder", config);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
