
const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
app.set("view engine", "ejs");

app.get('/', (req, res, next) => res.render('client.ejs'));

// =======

const server = app.listen(80, "127.0.0.1");

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/mypeer',
  // generateClientId: customGenerationFunction
});

app.use('/something', peerServer);



// Using HTTPS
// Simply pass in PEM-encoded certificate and key.

// const fs = require('fs');
// const { PeerServer } = require('peer');

// const peerServer = PeerServer({
//   port: 9000,
//   ssl: {
//     key: fs.readFileSync('/path/to/your/ssl/key/here.key'),
//     cert: fs.readFileSync('/path/to/your/ssl/certificate/here.crt')
//   }
// });
