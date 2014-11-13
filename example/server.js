var express = require('express');
var OSRM = require('../');

var app = express();
var osrm = new OSRM("stuttgart-regbez-latest.osrm");

// Accepts a query like:
// http://localhost:8888?start=52.519930,13.438640&end=52.513191,13.415852
app.get('/', function(req, res) {    
    var query = {
        coordinates: [[48,9],[49,8]]
    };
    osrm.oneToMany(query, function(err, result) {
        if (err) return res.json({"error":err.message});
        return res.json(JSON.parse(result));
    });
});

console.log('Listening on port: ' + 8888);
app.listen(8888);

