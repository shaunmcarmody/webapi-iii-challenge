const express = require('express');

const db = require('./postDb.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req);
    // try {
    //     const posts = db.get()
    //     console.log(posts);
    //     res.status(200).json(posts);
    // } catch (err) {
    //     res.status(500).json({ error: 'There was an error retrieving posts' })
    // }
});


module.exports = router;