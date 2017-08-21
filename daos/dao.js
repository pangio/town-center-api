
var _ = require('underscore');
var dynamoReservedWords = require('../dynamodbReservedWords');

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "dynamodb.us-east-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

// ---- FIND BY ID -----
exports.findById = function(tableName, field, id, callback) {
	console.log("params ::" + tableName, field, id);
	var key = {};
	key[field] = id
	var params = {
	    TableName: tableName,
	    Key : key
	};

	console.log("PARAMS:", JSON.stringify(params));

	docClient.get(params, function(err, data) {
	  if (err) {
	      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
	      return callback(err, null)
	  } else {
	      console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
	      return callback(null, data)
	  }
	});
};

// ---- FIND ALL -----
exports.findAll = function(tableName, attributesToReturn, callback){
  expressionAttsNames = {}
  attributesToReturnFiltered = []

  _.each(attributesToReturn, function(attr){
    if (_.contains(dynamoReservedWords.reservedWords, attr.toUpperCase())) {
        // if attr (example date) in dynamo reserved words --> replace with "#dat": "date",
        var new_attr = "#"+attr.slice(0, -1);
        expressionAttsNames[new_attr] = attr;
        attributesToReturnFiltered.push(new_attr)
    } else {
      attributesToReturnFiltered.push(attr)
    }
  });

  console.log("attrs to return: " + attributesToReturnFiltered);
  console.log(":: ExpressionAttributeNames :: " + JSON.stringify(expressionAttsNames));

  var params = {
    TableName: tableName,
    ProjectionExpression: attributesToReturnFiltered,
    ExpressionAttributeNames: expressionAttsNames
  };

  console.log("Scanning " + tableName + " table.");
  docClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        return callback(err, null)
    } else {
        // print all the movies
        console.log("Scan succeeded.");
        data.Items.forEach(function(movie) {
           console.log(
                movie);
        });

        // continue scanning if we have more movies, because
        // scan can retrieve a maximum of 1MB of data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
        return callback(null, JSON.stringify(data.Items))
    }
  }

};

exports.find_by = function(tableName, filterList, callback){

};

// console.log("Querying for movies.");

  // var params = {
  //     TableName : "TOWN_Cinema",
  //     KeyConditionExpression: "movie = :mov",
  //     ExpressionAttributeValues: {
  //         ":mov":"Mujer Maravilla"
  //     }

  // };

  // docClient.query(params, function(err, data) {
  //     if (err) {
  //         console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
  //     } else {
  //         console.log("Query succeeded.");
  //         data.Items.forEach(function(item) {
  //           console.log(JSON.stringify(_.first(data.Items)))
  //           return callback(null, _.first(data.Items))
  //         });
  //     }
  // });
