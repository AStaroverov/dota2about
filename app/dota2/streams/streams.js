var _ = require('lodash');

var async = require('async');
var getTwitch = require('./api/twitch.js')

var getMatches = function (cb) {
  var sources = {};
  async.parallel([getTwitch], function (err, result) {
    for (var source of result) {
      _.extend(sources, source);
    }

    _.isFunction(cb) && cb(sources);
  })
};

module.exports = getMatches;