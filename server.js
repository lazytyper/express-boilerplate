const express = require('express');
const app = express();
const path = require('path');
const sassMiddleware = require('sass-middleware');

global.serverRoot = __dirname;

const defaultPort = 3000;
let port = process.argv[2] || defaultPort;

const DEV = process.env.NODE_ENV !== 'production';

const SRC = path.join(__dirname, 'src', 'scss');
const DEST = path.join(__dirname, 'public', 'css');

/* nodemon workaround */
if (port === 'server.js') {
	port = defaultPort;
}

app.use(
	'/css',
	sassMiddleware({
		src: SRC,
		dest: DEST,
		prefix: '/css',
		force: DEV,
		sourceMap: DEV,
		outputStyle: DEV ? 'expanded' : 'compressed'
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/css', express.static(DEST, { maxAge: DEV ? 0 : '7d' }));

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
