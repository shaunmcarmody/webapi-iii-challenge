const express = require('express');

const users = require('./users/userRoute.js');
const posts = require('./posts/postRoute.js');

const server = express();

server.use(express.json());

server.use('/api/users', users);
server.use('/api/posts', posts);

server.listen(5000, console.log('Listening on Port 5000'));
