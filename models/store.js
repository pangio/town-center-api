'use strict';

//
// http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Scan
//
// AWS Dynamo SCAN

var stores = [];
for (var index = 0; index <= 20; index++) {
  var store = {
    id: index,
    name: 'Tienda ' + index
  };
  stores.push(store)
}

exports.list = function(callback) {
  console.log('All Stores found.');
  callback(null, stores);
};

// AWS Dynamo Query (findOne)
exports.findOne = function(storeId, callback) {

  var store = stores[storeId];  
  if (!store) {
    console.log('Store not found.');
    return callback('Store not found.', null);
  }
  
  console.log('Store ' + storeId + ' found.');
  return callback(null, store);
};
