//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/market'));

app.all('/', function(req, res, next) {
    res.header("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
    next();
  });

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/market/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);