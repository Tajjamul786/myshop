const express = require('express');
const routes = express.Router();
const adminRoutes = require('./admin/admin');
const shopRoutes = require('./shop/shop');

routes.use('/admin', adminRoutes);
routes.use('/shop', shopRoutes);

routes.use('/', (req, res, next) => {
    res.status(404).send('<h1>invalid path</h1>');
});

module.exports = routes;