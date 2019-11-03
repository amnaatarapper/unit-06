const express = require('express');
const router = express.Router();


router.get('/fr/about', (req, res) => {
    res.render('about')
})

router.get('/en/about', (req, res) => {
    res.render('about_en')
})

module.exports = router;