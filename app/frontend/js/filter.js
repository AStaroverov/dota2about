'use strict';
var Vue = require('vue');


// FILTER moment
var moment = require('moment');

Vue.filter('moment', function (value) {
  value = parseInt(value);
  var d = moment.duration(value, 's');
  var str = '';
  if (parseInt(d.days()) > 0) {
    str += d.days() + 'd ';
  }
  if (parseInt(d.hours()) > 0) {
    str += d.hours() + 'h ';
  }
  if (parseInt(d.minutes()) > 0) {
    str += d.minutes() + 'm';
  }
  if (str === '') {
    str = 'few seconds';
  }
  return str;
});
