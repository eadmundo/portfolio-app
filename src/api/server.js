var restify = require('restify');
var request = require('request');

function respond(req, res, next) {
  var symbol = req.params.symbol.toUpperCase();
  var url = 'https://query.yahooapis.com/v1/public/yql?q=' +
            encodeURIComponent(
              'select * from yahoo.finance.quote where symbol in ("'+ symbol +'")'
            ) + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var body = JSON.parse(body);
      var response = {
        symbol: symbol,
        retrieved: false
      };
      if (body.query.count) {
        var quote = body.query.results.quote;
        if (quote.Name !== null) {
          response = {
            symbol: quote.symbol,
            price: quote.LastTradePriceOnly,
            name: quote.Name,
            retrieved: true
          };
        }
      }
      res.send(response);
    }
  });
  next();
}

var server = restify.createServer({
  name: 'PortfolioAPI'
});

server.use(restify.CORS({
  origins: [process.env.APP_HOST || 'http://localhost:8080'],
  credentials: true
}));

server.get('/quote/:symbol', respond);

server.listen(8081, '0.0.0.0', function(){
  console.log('%s listening at %s ', server.name, server.url);
});
