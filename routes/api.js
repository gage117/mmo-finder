const router = require("express").Router();
const Mmo = require("../models/mmo.js");

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

module.exports = router;
