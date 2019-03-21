require('dotenv').config()

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

const port = process.env.PORT || 5000;

server.listen(port, console.log(`Listening on Port ${port}`));
