// http://dotaprj.me/

var request = require('request');

var url = 'http://dotaprj.me/api/v2/gg/';

var getMatches = function (callback) {
  request(url, function(err, res, body) {
    if (err) {

      console.log(err);
      callback('error in gg');

    } else {
      callback(null, {gg: {
        title: 'gosugamers',
        data: JSON.parse(body)
      }});
    }
  })
}

module.exports = getMatches;

