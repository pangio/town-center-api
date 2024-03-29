var port = process.env.PORT || 8000,
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
app.use('/api/tiendas/home', storesRoute);

app.listen(port,  function(){
    console.log("Server running in port %d ", port);
});
