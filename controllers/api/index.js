const router = require('express').Router();
const prayerRoutes = require('./prayer-routes');


router.use('/prayers', prayerRoutes);


module.exports = router