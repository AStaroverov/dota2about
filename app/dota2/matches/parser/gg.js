var cheerio = require('cheerio');
var request = require('request');

var url = 'http://www.gosugamers.net/dota2/gosubet';

var getMatches = function (callback) {
  request(url, function(err, res, body) {
    if (err) {

      console.log(err);
      callback('error in gg');

    } else {
      var $ = cheerio.load(body);
      var card = [];

      $('.simple.matches tr').each(function(){
        card.push({
            title:$('.match',this).html().trim(),
            url:$('.match',this).attr('href').trim()
        });
      });

      callback(null, {gg: {
        title: 'gosugamers',
        data: card
      }});
    }
  })
}

module.exports = getMatches;