'use strict';

//
// http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.04.html#GettingStarted.NodeJs.04.Scan
//
// AWS Dynamo SCAN

var sales = [];
for (var index = 0; index <= 20; index++) {
  var saleOffer = {
    id: index,
    name: 'Sale Offer ' + index
  };
  sales.push(saleOffer)
}

exports.list = function(callback) {
  console.log('All Sales found.');
  callback(null, sales);
};

// AWS Dynamo Query (findOne)
exports.findOne = function(saleOfferId, callback) {

  var saleOffer = sales[saleOfferId];  
  if (!saleOffer) {
    console.log('SaleOffer not found.');
    return callback('SaleOffer not found.', null);
  }
  
  console.log('SaleOffer ' + saleOfferId + ' found.');
  return callback(null, saleOffer);
};
