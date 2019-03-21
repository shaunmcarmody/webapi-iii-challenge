const upperCaseName = (req, res, next) => {
    req.body.name = req.body.name.toUpperCase();
    next();
}

const validateName = (req, res, next) => {
    let { name } = req.body;
    if (!name) {
        res.status(400).json({ error: 'Name is required.' });
    } else {
        next();
    }
}

const validateText = (req, res, next) => {
    let { text } = req.body;
    if (!text) {
        res.status(400).json({ error: 'Text is required.' });
    } else {
        next();
    }
}

const validateUserId = (req, res, next) => {
    let { user_id } = req.body;
    if (!user_id) {
        res.status(400).json({ error: 'User ID is required.' });
    } else {
        next();
    }
}

module.exports = {
    upperCaseName,
    validateName,
    validateText,
    validateUserId
}