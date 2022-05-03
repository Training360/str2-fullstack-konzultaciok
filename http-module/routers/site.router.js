const SiteController = require('../controllers/site.controller');

const SiteRouter = {
    '/': res => SiteController.index(res),
    '/about': res => SiteController.about(res),
    '/product': res => SiteController.product(res),
    '/404': res => SiteController.error404(res),
};

module.exports = Object.freeze(SiteRouter);
