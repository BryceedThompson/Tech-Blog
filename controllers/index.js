const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = reqire('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;