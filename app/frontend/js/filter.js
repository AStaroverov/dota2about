'use strict';
var Vue = require('vue');


// FILTER moment
var moment = require('moment');
require("moment-duration-format");

Vue.filter('moment', function (value) {
  value = parseInt(value);
  return moment.duration(value, 's').format('h:mm:ss');
});