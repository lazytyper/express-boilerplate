const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(require('./routes/css'));
app.use('/', require('./routes'));

app.set('view engine', 'pug');

app.listen(3002, () => {
	console.log('Example app listening on port 3002!');
});
