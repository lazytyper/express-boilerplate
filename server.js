const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// include css router
app.use(require('./routes/css'));

// use pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	// index
	res.render('index', {
		title: 'Hey',
		message: 'Hello there!'
	});
});

app.listen(3001, () => {
	console.log('Example app listening on port 3001!');
});
