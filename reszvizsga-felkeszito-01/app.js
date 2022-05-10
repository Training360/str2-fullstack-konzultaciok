const http = require('http');
const SiteRouter = require('./routes/siteRouter');

const port = 8888;

const server = http.createServer( ({ url, method }, res) => {
    SiteRouter[url]
        ? SiteRouter[url](res)
        : SiteRouter['notfound'](res);
});

server.listen(port);
