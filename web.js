const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080
const app = express()
const pa11yApiClient = require('seoa11y-client');

app.use(bodyParser.json());

// serve static assets normally
app.use(express.static(__dirname + '/build'));

app.post('/report', function (req, res) {
  if (req.body.url) {
    pa11yApiClient.dispatch(req.get('Authorization').split(' ')[1], 'https://api.seoa11y.com', 'http://worker.seoa11y.com', (process.env.ASYNC_CONCURRENCY || 1), req.body.url, console.log)
      .then(function (report) {
        res.json(report);
      });
  } else if (req.body.urls) {
    pa11yApiClient.runOnList(req.get('Authorization').split(' ')[1], 'https://api.seoa11y.com', 'http://worker.seoa11y.com', (process.env.ASYNC_CONCURRENCY || 1), req.body.urls, console.log)
      .then(function (report) {
        res.json(report);
      });
  } else {
    res.status(400).json({
      message: "Please provide a url or urls to run the report on!"
    })
  }
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('/*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
