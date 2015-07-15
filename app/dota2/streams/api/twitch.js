"use strict";

var twitch = require("twitch.tv");

var tOptions = {
  "ua": "node.js twitch.tv by hellbeast92",
  "apiVersion": "3",
  "clientID": "10j59tbm5yl0l7acuj5ecmbv4f7vrr"
};

var getStreams = function (callback) {
  twitch('streams?game=Dota+2&limit=15', tOptions, function (err, data) {
    callback(null, {twitch: {
      title: 'twitch',
      data: data
    }})
  })
};

module.exports = getStreams;
