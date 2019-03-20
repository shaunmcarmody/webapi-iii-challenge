const express = require('express');

const db = require('./postDb.js');

const router = express.Router();

const {
    validateText,
    validateUserId
} = require('../mw');

router.get('/', async (req, res) => {
    try {
        const resource = await db.get();
        res.status(200).json(resource);
    } catch (err) {
        res.status(500).json({ error: 'There was an error retrieving posts.' });
    }
});

router.post('/', validateText, validateUserId, async (req, res) => {
    try {
        const resource = await db.insert(req.body);
        res.status(200).json(resource);
    } catch (err) {
        res.status(500).json({ error: 'There was an error inserting post.' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await db.getById(id);
        if (resource) {
            res.status(200).json(resource);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'There was an error retrieving post.' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await db.remove(id);
        if (resource) {
            res.status(200).json({ message: 'Post deleted' });
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error deleting post',
        });
    }
});

router.put('/:id', validateText, async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await db.update(id, req.body)
        if (resource) {
            res.status(201).json({ message: 'Post updated' });
        } else {
            res.status(404).json({ error: 'ID not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'There was an error updating post' });
    }
});

module.exports = router;