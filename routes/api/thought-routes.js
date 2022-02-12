const router = require('express').Router();
const { 
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

//
router
    .route('/:userId').post(addThought);

//
router
    .route('/:userId/:thoughtId')
    .put(addThought)
    .delete(removeThought);

//
router
    .route('/:userId/:thoughtId/:reactionId')
    .put(addReaction)
    .delete(removeReaction);

module.exports = router;