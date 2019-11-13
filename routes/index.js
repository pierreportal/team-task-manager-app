const express = require('express');
const router = express.Router();
const User = require("../models/User")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/team', (req, res) => {
  User.find({}).then(data => {
    res.json(data)
  }).catch(err => res.json(err))
})

module.exports = router;
