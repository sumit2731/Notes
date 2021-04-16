const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});
module.exports = router;