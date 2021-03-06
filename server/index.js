/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const bodyparser = require('body-parser');
const app = express();
// added bodyparser to add the of the request directly to the string
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
// const strings = ['Aang', 'Katara', 'Toph', 'Sokka', 'Appa'];
const strings = [
  { id: 5, body: 'Aang' },
  { id: 4, body: 'Katara' },
  { id: 3, body: 'Toph' },
  { id: 2, body: 'Sokka' },
  { id: 1, body: 'Appa' },
  { id: 0, body: 'Momo' },
];

let id = 6;

app.get('/api/getStrings', (req, res) => {
  res.send(JSON.stringify(strings));
});

app.post('/api/addString', (req, res) => {
  id += 1;
  strings.unshift({
    id,
    body: req.body.body,
  });
  res.send(JSON.stringify(strings[0]));
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
