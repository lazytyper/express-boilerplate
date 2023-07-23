const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// include css router
app.use(require('./routes/css'));
app.use('/', require('./routes'));

// use pug
app.set('view engine', 'pug');

app.listen(3001, () => {
	console.log('Example app listening on port 3001!');
});
