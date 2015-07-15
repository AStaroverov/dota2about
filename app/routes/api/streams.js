var express = require('express');
var router = express.Router();
var getStreams = require('../../dota2/streams/streams.js');


router.get('/', function(req, res, next) {
  getStreams(function(data) {
    res.json(data);
  })
});

module.exports = router;
