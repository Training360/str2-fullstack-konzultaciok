const controller = require('../controllers/buildingController');

const router = {
    '/': async (res) => {
        const list = await controller.getAll();
        res.setHeader('Content-Type', 'application/json');
        res.end(list);
    },
    'notfound': async (res) => {
        res.statusCode = 404;
        res.end('Not Found');
    },
};

module.exports = Object.freeze(router);