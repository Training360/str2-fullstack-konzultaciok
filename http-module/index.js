const http = require('http');
const fsp = require('fs').promises;
const path = require('path');
const glob = require('glob');

const SiteRouter = require('./routers/site.router');

const port = 8085;

http.createServer( (req, res) => {
    SiteRouter[req.url]
        ? SiteRouter[req.url](res)
        : SiteRouter['/404'](res);
    // logger here
}).listen( port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
