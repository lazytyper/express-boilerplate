const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

// add sub routers
// router.use('/examples', require('./example-router.js'));

module.exports = router;
