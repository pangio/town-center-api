'use strict';

//
// http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Scan
//
// AWS Dynamo SCAN

var cinemas = [];
for (var index = 0; index <= 20; index++) {
  var cinema = {
    id: index,
    name: 'Cine ' + index
  };
  cinemas.push(cinema)
}

exports.list = function(callback) {
  console.log('All Cinemas found.');
  callback(null, cinemas);
};

// AWS Dynamo Query (findOne)
exports.findOne = function(cinemaId, callback) {

  var cinema = cinemas[cinemaId];  
  if (!cinema) {
    console.log('Cinema not found.');
    return callback('Cinema not found.', null);
  }
  
  console.log('Cinema ' + cinemaId + ' found.');
  return callback(null, cinema);
};
