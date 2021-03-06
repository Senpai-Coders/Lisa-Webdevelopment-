// core modules
const fs = require('fs');
const path = require('path');
// plugins
const Handlebars = require('handlebars');
// constants
const FILE_NAME = process.argv[2] ? title(process.argv[2].toLowerCase()) : null;
const FILE_DIR = process.argv[3] ? process.argv[3].toLowerCase() : null;


validateFileName();

function title(str) {
	return str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
  }

function validateFileName() {
	// exit script if there is no component name specified on npm command
	if (!FILE_NAME) {
		console.log('\n× FAILED! \nPlease specify the component name on your npm command.');
		console.log('Example: npm run template maintreqs-cost-options\n\n');
		process.exit();
	} else {
		generateOutputDirectory();
	}
}

function generateOutputDirectory() {
	// generate output directory based from component name provided
	let dir = FILE_NAME;
	if (FILE_DIR) {
		dir = `${FILE_DIR}/${FILE_NAME}`;
	}
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
		getTemplatePaths();
	} else {
		console.log('\n× FAILED! \nIt seems that the component has been generated already.');
		console.log('Please remove it on the project root directory and try again.\n\n');
		process.exit();
	}
}

function getTemplatePaths() {
	// get all files inside scaffhold vue template
	// and pass each of them to generate dynamic component
	const templateDirectoryPath = path.join(__dirname, 'template');
	fs.readdir(templateDirectoryPath, (err, files) => {
		files.forEach(file => {
			generateTemplate({
				templateName: file,
				templateFilePath: `${templateDirectoryPath}/${file}`,
			});
		});
	});
}

function generateTemplate({templateName, templateFilePath}) {
	// generate dynamic component based from template files and component name given
	fs.readFile(templateFilePath, {encoding: 'utf-8'}, function(err, data) {
			if (!err) {
				const templateFormat = templateName.substr(templateName.indexOf('.'));
				const templateContent = Handlebars.compile(data.toString());
				const templateData = templateContent({ 
					filename: FILE_NAME,
					componentName: generateComponentName(FILE_NAME)
				});

				// rename and generate mock data file and append file format
				if (templateName.includes('-mock-data')) {
					templateName = `${FILE_NAME}-mock-data${templateFormat}`;
				} else {
					// rename template file with component name and append file format
					templateName = `${FILE_NAME}${templateFormat}`;
				}

				// insert spec and mock data file inside component unit test folder
				let componentPath = `${FILE_NAME}/${templateName}`;
				if (FILE_DIR) {
					componentPath = `${FILE_DIR}/${FILE_NAME}/${templateName}`;
				}
				if (templateFormat === '.spec.js' || templateName.includes('-mock-data')) {
					componentPath = `${FILE_NAME}/${FILE_NAME}-unit-test`;
					if (FILE_DIR) {
						componentPath = `${FILE_DIR}/${FILE_NAME}/${FILE_NAME}-unit-test`;
					}
					if (!fs.existsSync(componentPath)){
						fs.mkdirSync(componentPath);
					}
					componentPath = `${componentPath}/${templateName}`;
				}

				// generate new files with dynamic content based from template and data given
				fs.writeFile(componentPath, templateData, _err => {
					if (_err) {
						return console.error(`OOps! Failed to generate template: ${_err.message}.`);
					}
				});

			} else {
				console.log(err);
				process.exit();
			}
	});
}

function generateComponentName(name) {
	// get component name provided on npm command
	// and convert it to proper case to be used as ComponentName
	name = name.split('-');
	name = name.map(el => {
		// convert string to proper case prototype
		String.prototype.toProperCase = function () {
			return this.replace(/\w\S*/g, function(txt){
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		};
		return el.toProperCase();
	});
	name = name.join('');
	return name;
}

// display generate component success message
console.log('\n✔ Your component is successfully generated!');
console.log('You can find the generated component directory and and its content on the project root folder.\n\n');