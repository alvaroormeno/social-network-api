const router = require('express').Router();


// IMPORTANT - this import all of the API routtes from /api/index.js
const apiRoutes = require('./api');

// IMPORTANT - this adds prefix of '/api' to all the api routes imported from the "api directory"
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('404 Error!');
});



module.exports = router;