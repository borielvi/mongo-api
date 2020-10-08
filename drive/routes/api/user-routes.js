const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// /api/users
router
.route('/')
.get(getAllUsers)
.post(addUser);

// /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// /api/user/:userId
router
.route('/friends/:friendId/:userId')
.post(addFriend);

router
.route('/friends/:id/:friendId')
.delete(removeFriend);


module.exports = router;