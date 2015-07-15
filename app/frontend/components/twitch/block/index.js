require('./style.sass');
var $ = require('jquery');
var getStreams = $.get('/api/streams');

module.exports = {
  template: require('./template.html'),
  data: function () {
    return {
      streams: {}
    }
  },
  ready: function () {
    getStreams.then(function (data) {
      this.streams = data.twitch.data.streams;
      this.$emit('data-loaded')
    }.bind(this))
  },
  components: {
    'vue-twitchcard': require('../card')
  }
};