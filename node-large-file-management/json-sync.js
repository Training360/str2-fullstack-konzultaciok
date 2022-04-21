console.time('run');
const fs = require('fs');
const rawdata = fs.readFileSync('product.json');
const data = JSON.parse(rawdata);

console.log(data[5]);

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
console.timeEnd('run');