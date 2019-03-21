const express = require('express');

const db = require('./userDb.js');

const router = express.Router();

const {
    upperCaseName,
    validateName
} = require('../mw');

router.get('/', async (req, res) => {
    try {
        const resource = await db.get();
        res.status(200).json(resource);
    } catch (err) {
        res.status(500).json({ error: 'There was an error retrieving users.' });
    }
});

router.post('/', validateName, upperCaseName, async (req, res) => {
    try {
        const resource = await db.insert(req.body);
        res.status(200).json(resource);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'There was an error inserting user.' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await db.getById(id);
        if (resource) {
            res.status(200).json(resource);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'There was an error retrieving users.' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await db.remove(id);
        if (resource) {
            res.status(200).json({ message: 'User deleted' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error deleting user',
        });
    }
});

router.put('/:id', validateName, upperCaseName, async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await db.update(id, req.body)
        if (resource) {
            res.status(201).json({ message: 'User updated' });
        } else {
            res.status(404).json({ error: 'ID not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'There was an error updating user' });
    }
});

router.get('/:id/posts', async (req, res) => {
    const { id } = req.params;
    try {
        const resource = await db.getUserPosts(id);
        if (resource) {
            res.status(200).json(resource);
        } else {
            res.status(404).json({ error: 'No posts available for user.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'There was an error retrieving users posts.' });
    }
});

module.exports = router;
