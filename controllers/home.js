'use strict';

var model = require('../models/home');
var _ = require('underscore');

exports.get = function(req, res, next) {
	var magazineId = req.params.id;
	model.findOne(magazineId,function(err, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};
