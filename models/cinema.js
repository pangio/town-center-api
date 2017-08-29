'use strict';

var _ = require('underscore');
var dao = require('../daos/dao');

var cinemaTable = 'TOWN_Cinema';
var key = 'movie';

exports.list = function(callback) {
  console.log('All Cinemas found.');
  return dao.findAll(cinemaTable, ["movie", "category", "date", "duration", "hours", "image_url", "language", "screen"], callback);
};

exports.findOne = function(cinemaId, callback) {
  return dao.findById(cinemaTable, key, cinemaId, callback);
};
