// Node modules
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const contentful = require('contentful');
const ipWhitelist = require('ip-whitelist');


require('dotenv').config()

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ipWhitelist(ipWhitelist.array([
  '127.0.0.1',
  '::1','37.44.1.250',
  '::ffff:10.14.49.90',
  '10.14.49.90'
])));

app.use(ipWhitelist(ip => {
    console.log(ip);
}));

const client = contentful.createClient({
  accessToken:'OynZDziFyP5Dowa7l-n10Eqr8fZQxWcbTVkuLA-aDEA',
  space: 'yfskl0944hk0',
  resolveLinks: true
})

// Get employee data from employees.json file
app.get('/get-employees', function (req, res) {
  client.getEntries({limit: 500}).then((response) => {
    res.send(response);
  })
})

/*
* Require production server module.
* This module serves the Angular application from Node when in production.
* When developing locally, use `npm run dev` and the app will be served by the Angular CLI
*/

require('./production_server').serve(app, express)


/*
* Instruct the Node application to listen for incoming requests on the node port specified
* in the .env file.
*/

app.listen(process.env.PORT || 5000, () => {
  console.log(`Node server running on port ${ process.env.PORT }`)
})
