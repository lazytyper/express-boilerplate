const express = require('express');
const sass = require('node-sass');
const path = require('path');
const fs = require('fs');

const serverRoot = path.dirname(__dirname);
const scssPath = path.join(serverRoot, 'styles');
const router = express.Router();

const compiledCss = {};

const getCss = (scssFile) => {
	return sass.renderSync({
		file: path.join(scssPath, scssFile),
		outputStyle: 'compressed',
		includePaths: [scssPath]
	}).css.toString();
};

router.get('/styles/:filename.css', (req, res, next) => {
	const scssFile = req.params.filename + '.scss';
	if (fs.existsSync(path.join(scssPath, scssFile))) {
		const fileTime = fs.statSync(path.join(scssPath, scssFile)).mtimeMs;
		if (compiledCss[scssFile] && compiledCss[scssFile].fileTime === fileTime) {
		} else {
			compiledCss[scssFile] = {
				fileTime: fileTime,
				css: getCss(scssFile)
			};
		}
		res.set('Content-Type', 'text/css');
		res.send(compiledCss[scssFile].css);
	} else {
		next();
	}
});

module.exports = router;
