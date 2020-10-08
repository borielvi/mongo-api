const router = require('express').Router();
const {
   getAllThoughts,
   getThoughtById,
   addThought,
   updateThought,
   deleteThought,
   addReaction,
   removeReaction
} = require('../../controllers/thought-controller');

// thought routes
router
.route('/')
.get(getAllThoughts);

router
.route('/:id')
.get(getThoughtById)
.post(addThought)
.put(updateThought)
.delete(deleteThought);

// reaction routes
router
.route('/reactions/:id')
.post(addReaction);

router
.route('/reactions/:id/:reactionId')
.delete(removeReaction);


module.exports = router;