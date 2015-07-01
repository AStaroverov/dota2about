// dailydota2.com API
// http://dailydota2.com/match-api-doc.txt

var request = require('request');

var url = 'http://dailydota2.com/match-api';

var getMatches = function (callback) {
  request(url, function(err, res, body) {
    if (err) {
      console.log(err);
      callback('error in gg');
    } else {
      callback(null, {dd: {
        title: 'dailydota2',
        data: JSON.parse(body)
      }});
    }
  })
}

module.exports = getMatches;

