'use strict';

var dao = require('../daos/dao');
var _ = require('underscore');

var storeTable = 'TOWN_Locations';
var key = 'local';

exports.list = function(callback) {
  return dao.findAll(
    storeTable,
  	[
      'category',
      'description',
      'hours',
      'image_url',
      'local',
      'map_url',
      'name',
      'status',
      'type',
      'url',
      'web_image_url',
  	],
  	callback);
};

exports.findOne = function(storeId, callback) {
  return dao.findById(storeTable, key, storeId, callback);
};
