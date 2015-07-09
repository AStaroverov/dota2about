"use strict";

var Vue = require('vue');

var app = new Vue({
  el: '#app',
  ready: function () {
    console.log('init');
  },
  components: {
    // define the main pages as async components.
    'vue-timetable': require('../components/timeTable')
  }
});
