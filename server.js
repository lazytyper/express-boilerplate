const express = require('express');
const app = express();

global.serverRoot = __dirname;

const defaultPort = 3000;
const port = process.argv[2] || defaultPort;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

// include body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include css router
app.use(require('./routes/utils/scss2css'));
app.use('/', require('./routes/routes.js'));

// include demo router
app.use('/demo', require('./routes/demo/demo.js'));

// use pug
app.set('view engine', 'pug');

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
