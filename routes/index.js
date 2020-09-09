const express = require('express');
const router = express.Router();
const fs = require('fs');


// Welcome Page
router.get('/', (req, res) => res.render('index'));
router.get('/docs', (req, res) => res.render('docs'));

module.exports = router;