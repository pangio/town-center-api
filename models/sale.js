'use strict';

'use strict';

var dao = require('../daos/dao');
var _ = require('underscore');

var storeTable = 'TOWN_Offers';
var key = 'title';

exports.list = function(callback) {
  return dao.findAll(storeTable,
    [
  		'creator',
		'description',
		'end_date',
		'home_image_url',
		'image_url',
		'publish_date',
		'show_home',
		'subtitle',
		'title',
		'url',
  	],
  	callback);
};

exports.findOne = function(offerId, callback) {
  return dao.findById(storeTable, key, offerId, callback);
};
