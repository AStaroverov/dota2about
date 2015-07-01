var _ = require('lodash');

var async = require('async');
// var getGG = require('./api/gg.js')
// var getJD = require('./api/jd.js')
var getDD = require('./api/dd.js')

var getMatches = function (cb) {
  var sources = {};
  async.parallel([getDD], function (err, result) {
    for (var source of result) {
      _.extend(sources, source);
    }

    _.isFunction(cb) && cb(sources);
  })
}

module.exports = getMatches;