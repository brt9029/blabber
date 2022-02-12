const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of `/users` to routes in `comment-routes.js`
router.use('/users', userRoutes);
// add prefix of `/thoughts` to routes created in `pizza-routes.js`
router.use('/comments', thoughtRoutes);

module.exports = router;