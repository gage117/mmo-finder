const router = require("express").Router();
const {Mmo} = require("../models");
const {IGDB_api} = require("../igdb-api");

const calculateAverageRating = (ratings) => {
  average_rating = ratings.reduce((a, b) => a.score + b.score) / ratings.length;
  return average_rating;
};

router.get("/api/mmo", (req, res) => {
  Mmo.find({})
    .sort({ average_rating: -1 })
    .then(dbMmo => {
      res.json(dbMmo);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//! TODO: Refine to use IGDB game ID instead of game name
router.get("/api/mmo/:id", async (req, res) => {
  try {
    const ourData = await Mmo.findById(req.params.id);
    const igdbData = await IGDB_api.getGameByName(ourData.name);
    res.json({ourData, igdbData: igdbData.data[0]});
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

router.post("/api/mmo", ({ body }, res) => {
  Mmo.create(body)
    .then(dbMmo => {
      res.json(dbMmo);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/mmo/bulk", ({ body }, res) => {
  Mmo.insertMany(body)
    .then(dbMmo => {
      res.json(dbMmo);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
