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
      'home_image_url',
      'hours',
      'local',
      'name',
      'map_url',
      'show_home',
      'status',
      'type',
      'url',
      // 'web_sm_image_url',
  	],
  	callback);
};

exports.slider = function(callback) {
  return dao.findAll(
    storeTable,
    [
      'home_image_url',
      'show_home',
    ],
    callback);
};

exports.findOne = function(storeId, callback) {
  return dao.findById(storeTable, key, storeId, callback);
};
