const router = require('express').Router();
const prayerRoutes = require('./prayer-routes');
// const productRoutes = require('./product-routes');
// const categoryRoutes = require('./category-routes');
// const profitRoutes = require('./product_profit-routes');

router.use('/prayers', prayerRoutes);
// router.use('/products', productRoutes);
// router.use('/categories', categoryRoutes);
// router.use('/profits', profitRoutes);

module.exports = router