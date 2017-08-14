'use strict';

//
// http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Scan
//
// AWS Dynamo SCAN

var restaurants = [];
for (var index = 0; index <= 20; index++) {
  var restaurant = {
    id: index,
    name: 'Restaurant ' + index
  };
  restaurants.push(restaurant)
}

exports.list = function(callback) {
  console.log('All Restaurants found.');
  callback(null, restaurants);
};

// AWS Dynamo Query (findOne)
exports.findOne = function(restaurantId, callback) {

  var restaurant = restaurants[restaurantId];  
  if (!restaurant) {
    console.log('Restaurant not found.');
    return callback('Restaurant not found.', null);
  }
  
  console.log('Restaurant ' + restaurantId + ' found.');
  return callback(null, restaurant);
};
