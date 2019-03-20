const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const users = require('./users/userRoute.js');
const posts = require('./posts/postRoute.js');

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/users', users);
server.use('/api/posts', posts);

server.listen(5000, console.log('Listening on Port 5000'));
