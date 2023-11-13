const sass = require('node-sass');
const fs = require('fs');

const inputPath = 'styles/main.scss';
const outputPath = 'public/styles/main.css';

function build() {
	sass.render({
		file: inputPath,
		outputStyle: 'compressed',
	}, (err, result) => {
		if (err) {
			console.error(err);
		} else {
			fs.writeFileSync(outputPath, result.css);
			console.log(`Transpiled ${inputPath} to ${outputPath}`);
		}
	});
}

module.exports = build;

if (require.main === module) {
	console.log('Running the SCSS transpilation script directly.');
	module.exports(); // Führe das Transpilierungsskript aus
}
