const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

// add prefix of `/comments` to routes in `comment-routes.js`
router.use('/users', userRoutes);
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/comments', commentRoutes);

module.exports = router;