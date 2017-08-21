'use strict';

var _ = require('underscore');
var dao = require('../daos/dao');

var cinemaTable = 'TOWN_Cinema';
var key = 'movie';

// var cinemas = [];
// for (var index = 0; index <= 20; index++) {
//   var cinema = {
//     id: index,
//     name: 'Cine ' + index
//   };
//   cinemas.push(cinema)
// }

exports.list = function(callback) {
  console.log('All Cinemas found.');
  return dao.findAll(cinemaTable, ["movie", "category", "date", "duration"], callback);
};

exports.findOne = function(cinemaId, callback) {
  return dao.findById(cinemaTable, key, cinemaId, callback);
};
