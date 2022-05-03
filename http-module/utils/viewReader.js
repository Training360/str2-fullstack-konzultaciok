const { readFile } = require('fs').promises;
const { join } = require('path');

const reader = async (res, fileName, statusCode = 200) => {
    
    const filePath = join(__dirname, `../views/${fileName}.html`);
    const errorPath = join(__dirname, `../views/404.html`);
    
    let fileContent = '';
    try {
        fileContent = await readFile(filePath, 'utf8');
    } catch(e) {
        fileContent = await readFile(errorPath, 'utf8');
        statusCode = 404;
    }
    
    res.writeHead(statusCode, {
        'Content-Type': 'text/html',
    });
    res.end(fileContent);
};

module.exports = Object.freeze({
    reader,
});
