var cheerio = require('cheerio');
var request = require('request');

var url = 'http://www.joindota.com/en/betting/open';

var getMatches = function (callback) {
  request(url, function(err, res, body) {
    if (err) {

      console.log(err);
      callback('error in gg');

    } else {
      var $ = cheerio.load(body);
      var card = [];

      $('#content .match_names').each(function(i) {
        card.push({
            title:$(this).html().trim(),
            url:$('#content .match_logos score a')[i].attr('href').trim()
        });
      });

      callback(null, card);
    }
  })
}

module.exports = getMatches;