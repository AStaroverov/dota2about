var express = require('express');
var router = express.Router();
var getMatches = require('../../dota2/matches/matches.js');


router.get('/', function(req, res, next) {
  getMatches(function(data) {
    res.json(data);
  })
});

module.exports = router;
