// Node modules
const http = require('http')
const path = require('path')

// Config
require('dotenv').config()

exports.serve = function (app, express) {
  if (process.env.NODE_ENV === 'production') {
    app.set('port', process.env.APP_PORT)

    app.use(express.static(path.join(__dirname, 'dist')))

    app.use((req, res, next) => {
      res.header("Content-Security-Policy",
                 `default-src 'self'; connect-src *; font-src 'self' data: ; style-src 'self' 'unsafe-inline'; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://d2aafqm3hbgbf6.cloudfront.net https://d2q66yyjeovezo.cloudfront.net https://d1idiovbex4hy4.cloudfront.net https://d3e2aud6m9sl41.cloudfront.net https://phd.aws.amazon.com https://resources.console.aws.amazon.com https://signin.aws.amazon.com *.signin.aws.amazon.com https://d36cz9buwru1tt.cloudfront.net https://media.amazonwebservices.com`);
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      if ('OPTIONS' === req.method) { res.send(200); }
      else { next(); }
    });

    app.get('*', (req, res) => {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      
      const whitelist = [
        '127.0.0.1',
        '::1',
        '37.44.1.250',
        '::ffff:10.14.49.90',
        '10.14.49.90'
      ];
      
      if (whitelist.includes(ip))
        res.sendFile(path.join(__dirname, 'dist/index.html'));
      else 
        res.status(403).send('Forbidden').end();
    });

    const server = http.createServer(app);
    server.listen(process.env.APP_PORT, () => console.log(`Serving dist on port ${process.env.APP_PORT}`))
  }
};