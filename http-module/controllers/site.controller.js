const { reader } = require('../utils/viewReader');

const index = res => reader(res, 'index');

const about = res => reader(res, 'about');

const product = res => reader(res, 'product');

const error404 = res => reader(res, '404');

module.exports = Object.freeze({
    index,
    about,
    product,
    error404,
});
