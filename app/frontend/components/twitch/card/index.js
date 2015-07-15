require('./style.sass');
var $ = require('jquery');
var getStreams = $.get('/api/streams');

module.exports = {
  template: require('./template.html'),
  props: ['stream'],
  data: function () {},
  methods: {
    redirect: function () {
      window.open(this.stream.channel.url, '_blank');
    }
  }
};