var _ = require('underscore');
var dynamoReservedWords = require('../dynamodbReservedWords');

var dao = require('../daos/dao');

var moment = require('moment');


exports.findMoviesToShow = function(tableName, attributesToReturn, callback) {

  expressionAttsNames = {}
  attributesToReturnFiltered = []

  _.each(attributesToReturn, function(attr) {
    if (_.contains(dynamoReservedWords.reservedWords, attr.toUpperCase())) {
      // if attr (example date) in dynamo reserved words --> replace with "#dat": "date",
      var new_attr = "#" + attr.slice(0, -1);
      // console.log(new_attr);
      expressionAttsNames[new_attr] = attr;
      attributesToReturnFiltered.push(new_attr)
    } else {
      attributesToReturnFiltered.push(attr)
    }
  });

  // console.log("attrs to return: " + attributesToReturnFiltered);
  // console.log(":: ExpressionAttributeNames :: " + JSON.stringify(expressionAttsNames));

  var params = {
    TableName: tableName,
    IndexName: "show-index",
    ExpressionAttributeNames: expressionAttsNames,
    KeyConditionExpression: "#sho = :show_value",
    ExpressionAttributeValues: {
      ":show_value": "true"
    },
    ProjectionExpression: attributesToReturnFiltered,
  }

  dao.docClient.query(params, function(err, data) {
    if (err) {
      console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
      return callback(err, null)
    } else {

      var moviesOrderedByDate = _.sortBy(data.Items, 'date').reverse();
      return callback(null, JSON.stringify(moviesOrderedByDate))
    }
  });

};
