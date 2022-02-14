const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// get all users or create one /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// get one user, update, or delete a user at /api/users/:id
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add and remove user from friend list at /api/users/<userId>/friends/<friendId>
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;