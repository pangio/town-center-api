'use strict';

var model = require('../models/store');
var _ = require('underscore');

exports.list = function(req, res, next) {
	model.list(function(err, data){
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};

exports.get = function(req, res, next) {
	var storeId = req.params.id;
	model.findOne(storeId,function(err, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};
