'use strict';

'use strict';

var dao = require('../daos/dao');
var _ = require('underscore');

var storeTable = 'TOWN_Offers';
var key = 'title';

exports.list = function(callback) {
  console.log('All offers found.');
  return dao.findAll(storeTable, ["title", "creator", "description", "end_date",
    "publish_date", "subtitle", "image_url", "url", "home_image_url"
  ], callback);
};

exports.findOne = function(offerId, callback) {
  return dao.findById(storeTable, key, offerId, callback);
};
