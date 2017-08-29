var port = process.env.PORT || 8000,
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

/**
 * Routes
 */
var cinemasRoute = require('./routes/cinemas'),
    restaurantsRoute = require('./routes/restaurants'),
    salesRoute = require('./routes/sales'),
    servicesRoute = require('./routes/services'),
    storesRoute = require('./routes/stores');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.use('/', homeRoute);
app.use('/api/cines', cinemasRoute);
app.use('/api/restaurantes', restaurantsRoute);
app.use('/api/ofertas', salesRoute);
app.use('/api/servicios', servicesRoute);
app.use('/api/tiendas', storesRoute);

app.listen(port,  function(){
    console.log("Server running in port %d ", port);
});
