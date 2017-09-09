'use strict';

var _ = require('underscore');
var dao = require('../daos/dao');
var cinema_dao = require('../daos/cinemaDao');

var cinemaTable = 'TOWN_Cinema';
var key = 'movie';

exports.list = function(callback) {
  return cinema_dao.findMoviesToShow(
    cinemaTable,
    [
      'category',
      'classification',
      'date',
      'duration',
      'image_url',
      'hours',
      'language',
      'movie',
      'show',
      'screen',
      'web_image_url',
    ],
    callback);
};

exports.findOne = function(cinemaId, callback) {
  return dao.findById(cinemaTable, key, cinemaId, callback);
};
