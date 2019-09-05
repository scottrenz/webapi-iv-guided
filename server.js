const express = require('express');
const helmet = require('helmet')

const secrets = require('../config/secrets.js')

console.log('environment', process.env)

const apiRouter = require('./api-router.js')

const server = express();

server.use(helmet())
server.use('/api', apiRouter)


// global middleware
server.use(express.json());
// server.use(uppercaser); // using custom middleware globally

module.eports = server;
