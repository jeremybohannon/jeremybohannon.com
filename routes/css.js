var express = require('express');
var router = express.Router();


router.get('/CSS/stylesheet.css', function (req, res) {
    res.sendFile(__dirname + '/CSS/stylesheet.css');
});

router.get('/CSS/homecontent.css', function (req, res) {
    res.sendFile(__dirname + '/CSS/homecontent.css');
});

router.get('/CSS/contactForm.css', function (req, res) {
    res.sendFile(__dirname + '/CSS/contactForm.css');
});

module.exports = router;