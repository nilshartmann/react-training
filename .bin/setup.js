const fs = require('fs');
const os = require('os');
const path = require('path');


const SEP = os.platform() === 'win32' ? '\\\\' : '/';

const EXCLUDED_DIRS = [
    'node_modules',
    '.git',
    '.idea',
    'dist'
];

const handlePackageJson = dir => {
    const inputPackageJsonPath = `${dir}/_package.json`;
    const outputPackageJsonPath = `${dir}/package.json`;

    console.log(`Processing ${inputPackageJsonPath} to ${outputPackageJsonPath}...`);
    const content = fs.readFileSync(inputPackageJsonPath, 'UTF-8');

    const newContent = content.replace(/\.\.\//g, `..${SEP}`)
        .replace(/\/\.bin\//g, `${SEP}.bin${SEP}`);

    fs.writeFileSync(outputPackageJsonPath, newContent);
};

const handlerForDirectory = dir => file => {
    const qualifiedName = path.join(dir, file);
    fs.stat(qualifiedName, (error, stat) => {
        if (error) {
            console.error(`Error stating file '${file}' in '${dir}' (${qualifiedName})`, error);
            throw error;
        }

        if (stat.isFile() && file === '_package.json') {
            handlePackageJson(dir);
        } else if (stat.isDirectory()) {
            if (!EXCLUDED_DIRS.includes(file)) {
                processDir(qualifiedName);
            }
        }
    });
};

// Read all entries in directory and invoke handler
const processDir = dir => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err);
            throw err;
        }

        const handler = handlerForDirectory(dir);

        files.forEach(handler);
    })
};

// Start
processDir('./code');
