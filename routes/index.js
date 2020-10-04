const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) => res.render('index'));

// Docs Welcome Page
router.get('/docs', (req, res) => res.render('./docs/index'))

module.exports = router;