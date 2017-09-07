'use strict';



var services = [];
for (var index = 0; index <= 20; index++) {
  var service = {
    id: index,
    name: 'Service ' + index
  };
  services.push(service)
}

exports.list = function(callback) {
  callback(null, services);
};

// AWS Dynamo Query (findOne)
exports.findOne = function(serviceId, callback) {

  var service = services[serviceId];
  if (!service) {
    console.log('Service not found.');
    return callback('Service not found', null);
  }

  console.log('Service ' + serviceId + ' found.');
  return callback(null, service);
};
