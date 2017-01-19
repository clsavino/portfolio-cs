/* Set up the server file to require npm packages, express middleware, body-parser*/
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
//Include the path package to get the correct file path
var path = require('path');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
//app.use(express.static(process.cwd() + '/public'))
//app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//root route redirect to /index

app.get("/", function(req, res) {
  res.render(index.html);
});
/*
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, "public", index.html));
});
*/
/*
app.get("*", function(req,res) {
    res.sendFile(path.resolve(__dirname, "public", index.html));
});
*/
// Set up the server
var PORT = process.env.PORT || 8000; // Sets an initial port.
app.listen(PORT, function() {
  console.log('App Server is listening on port ' + PORT);
});
