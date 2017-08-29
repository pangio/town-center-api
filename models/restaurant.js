'use strict';

var dao = require('../daos/dao');
var _ = require('underscore');

var storeTable = 'TOWN_Stores';
var key = 'name';

exports.list = function(callback) {
  console.log('All stores found.');
  return dao.findAll(storeTable, ["name", "description", "hours", "local", "level", "type", "image_url", "url" ], callback);
};

exports.findOne = function(storeId, callback) {
  return dao.findById(storeTable, key, storeId, callback);
};
