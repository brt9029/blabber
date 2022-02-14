const router = require('express').Router();
const { 
    getThoughts,
    getSingleThought,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// get all thoughts at /api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(addThought);

// get single thought, update or delete a thought at /api/thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(removeThought);

// add a reaction at /api/thoughts/<thoughtId>/reaction
router
    .route('/:thoughtId/reaction')
    .post(addReaction);

// remove a reaction using /api/thoughts/<thoughtId>/reaction/<reactionId>
router
    .route('/:thoughtId/reaction/:reactionId')
    .delete(removeReaction);

module.exports = router;