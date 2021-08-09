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
    name: 'Guild Wars 2',
    description: 'A pretty rad MMO',
    genre: 'MMORPG',
    release_date: new Date('August 28, 2012'),
    pay_model: 'Buy To Play',
    platforms: ['PC'],
    pve: true,
    pvp: true,
    developers: ['ArenaNet'],
    publishers: ['ArenaNet', 'NCSoft']
  },{
    name: 'World of Warcraft',
    description: 'The Big Cheese',
    genre: 'MMORPG',
    release_date: new Date('November 23, 2004'),
    pay_model: 'Subscription',
    platforms: ['PC'],
    pve: true,
    pvp: true,
    developers: ['Blizzard Entertainment'],
    publishers: ['Blizzard Entertainment']
  },{
    name: 'The Elder Scrolls Online',
    description: 'A fancy story-based RPG',
    genre: 'MMORPG',
    release_date: new Date('June 1, 2021'),
    pay_model: 'Buy to Play',
    platforms: ['PC'],
    pve: true,
    pvp: true,
    developers: ['ZeniMax Online Studios'],
    publishers: ['Bethesda Softworks']
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
