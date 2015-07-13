require('./style.sass');

module.exports = {
  template: require('./template.html'),
  props: ['match'],
  data: function () {
    return {
      live: false
    }
  },
  created: function () {
    this.live = this.match.status === '0' ? false : true;
  },
  methods: {
    redirect: function () {
      window.open(this.match.link, '_blank');
    }
  }
};