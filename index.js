require('dotenv').config()

const express = require('express');

const users = require('./users/userRoute.js');
const posts = require('./posts/postRoute.js');

const server = express();

server.use(express.json());

server.use('/api/users', users);
server.use('/api/posts', posts);

const port = process.env.PORT || 5000;

server.listen(port, console.log(`Listening on Port ${port}`));
