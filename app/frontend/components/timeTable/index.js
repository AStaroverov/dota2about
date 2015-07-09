var $ = require('jquery');

var getMatches = $.get('/api/matches');

module.exports = {
  template: require('./template.html'),
  data: function () {
    return {
        matches: {}
    }
  },
  ready: function () {
    getMatches.then(function (data) {
        console.log(data)
        this.matches = data.dd.data.matches;
    }.bind(this))
  },
  methods: {
    loadData: function () {

    }
  }
};