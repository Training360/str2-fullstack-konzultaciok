console.time('run');
const StreamArray = require('stream-json/streamers/StreamArray');
const fs = require('fs');
const id = process.argv[2] ? Number(process.argv[2]) : 0;

const jsonStream = StreamArray.withParser();

//internal Node readable stream option, pipe to stream-json to convert it for us
fs.createReadStream('product.json').pipe(jsonStream.input);

//You'll get json objects here
//Key is the array-index here
jsonStream.on('data', ({ key, value }) => {
    if (id && value.id === id) {
        console.log(value);
    }
});
jsonStream.on('error', (err) => {
    console.error(err);
});

jsonStream.on('end', () => {
    console.log('All Done');
});

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
console.timeEnd('run');