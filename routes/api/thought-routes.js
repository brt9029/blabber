const router = require('express').Router();
const { 
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router
    .route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtsId>
router
    .route('/:userId/:thoughtId')
    .put(addThought)
    .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactions>
router
    .route('/thoughts/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;