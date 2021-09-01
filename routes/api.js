const router = require("express").Router();
const {Mmo} = require("../models");

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
