//Install express server
const express = require('express');
var forceSsl = require('force-ssl-heroku');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(forceSsl);

app.all('/', function(req, res, next) {
    res.header("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
    next();
  });

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/market/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);