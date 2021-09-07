const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/mmo_finder', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

/* mmoSeedTemplate:
  {
    name: '',
    description: '',
    genre: '',
    release_date: '',
    pay_model: '',
    platforms: [],
    pve: true | false,
    pvp: true | false,
    developers: [],
    publishers: [],
    engine: '',
    price: [{ marketplace: '', price: '' }],
    ratings: [{ reviewer: '', rating: '' }],
    average_rating: 0,
    system_requirements: [{ requirement_name: '', requirement_value: '' }],
    tags: []
  }
**/

const mmoSeed = [
  {
    name: "Guild Wars 2",
    description: "A pretty rad MMO",
    logo: "https://res.cloudinary.com/gageeide/image/upload/v1630816875/mmo-finder/GW2Logo.png",
    genre: "MMORPG",
    release_date: new Date("August 28, 2012"),
    pay_model: "Buy To Play",
    platforms: ["PC"],
    pve: true,
    pvp: true,
    developers: ["ArenaNet"],
    publishers: ["ArenaNet", "NCSoft"],
    tags: [
      "Story-Rich",
      "Genre-bending",
      "World Events",
      "Level Scaling",
      "Expansive PvP",
    ],
  },
  {
    name: "World of Warcraft",
    description: "The Big Cheese",
    logo: "https://res.cloudinary.com/gageeide/image/upload/v1630817482/mmo-finder/wowLogo.png",
    genre: "MMORPG",
    release_date: new Date("November 23, 2004"),
    pay_model: "Subscription",
    platforms: ["PC"],
    pve: true,
    pvp: true,
    developers: ["Blizzard Entertainment"],
    publishers: ["Blizzard Entertainment"],
    tags: ["Grind-heavy", "Rich End Game", "Expansive PvP"],
  },
  {
    name: "The Elder Scrolls Online",
    description: "A fancy story-based RPG",
    logo: "https://res.cloudinary.com/gageeide/image/upload/v1630817874/mmo-finder/tesoLogo.jpg",
    genre: "MMORPG",
    release_date: new Date("June 1, 2021"),
    pay_model: "Buy to Play",
    platforms: ["PC"],
    pve: true,
    pvp: true,
    developers: ["ZeniMax Online Studios"],
    publishers: ["Bethesda Softworks"],
    tags: ["Story-Rich", "World Events", "Level-scaling"],
  },
  {
    name: "Black Desert Online",
    description: "2 extensive 4 me",
    logo: "https://res.cloudinary.com/gageeide/image/upload/v1630978292/mmo-finder/BDO_CoverArt.png",
    genre: "MMORPG",
    release_date: new Date("December 1, 2014"),
    pay_model: "Buy to Play",
    platforms: ["PC"],
    pve: true,
    pvp: true,
    developers: ["Pearl Abyss"],
    publishers: ["Pearl Abyss", "Kakao Games", "Kakao", "GameNet", "Koch Media", "GameOn Co., Ltd."],
    tags: ["Story-Rich", "World Events", "Level-scaling", "Large World"],
  },
];

db.Mmo.deleteMany({})
  .then(() => db.Mmo.collection.insertMany(mmoSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
