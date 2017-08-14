'use strict';

//
// http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Scan
//
// AWS Dynamo SCAN

var hospitals = [];
for (var index = 0; index <= 20; index++) {
  var hospital = {
    id: index,
    name: 'Hospital ' + index
  };
  hospitals.push(hospital)
}

exports.list = function(callback) {
  console.log('All Hospitals found.');
  callback(null, hospitals);
};

// AWS Dynamo Query (findOne)
exports.findOne = function(hospitalId, callback) {

  var hospital = hospitals[hospitalId];  
  if (!hospital) {
    console.log('Hospital not found.');
    return callback('Hospital not found.', null);
  }
  
  console.log('Hospital ' + hospitalId + ' found.');
  return callback(null, hospital);
};
