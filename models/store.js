'use strict';

var dao = require('../daos/dao');
var _ = require('underscore');

var storeTable = 'TOWN_Stores';
var key = 'name';

exports.list = function(callback) {
  console.log('All stores found.');
  return dao.findAll(storeTable, ["name"], callback);
};

exports.findOne = function(cinemaId, callback) {
  return dao.findById(storeTable, key, cinemaId, callback);
};


// var stores = [];
// for (var index = 0; index <= 20; index++) {
//   var store = {
//     id: index,
//     name: 'Tienda ' + index
//   };
//   stores.push(store)
// }
//
// exports.list = function(callback) {
//   console.log('All Stores found.');
//   callback(null, stores);
// };
//
// // AWS Dynamo Query (findOne)
// exports.findOne = function(storeId, callback) {
//
//   var store = stores[storeId];
//   if (!store) {
//     console.log('Store not found.');
//     return callback('Store not found.', null);
//   }
//
//   console.log('Store ' + storeId + ' found.');
//   return callback(null, store);
// };
