require('./build.js')();

const express = require('express');
const app = express();

global.serverRoot = __dirname;

const defaultPort = 3000;
let port = process.argv[2] || defaultPort;

/* nodemon workaround */
if(port === 'server.js') {
	port = defaultPort;
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

// include body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/routes.js'));

// use pug
app.set('view engine', 'pug');

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
