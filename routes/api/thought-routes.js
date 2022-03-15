
const router =require('express').Router();

const {getAllThought,addThought,removeThought,updateThought,addReaction,removeReaction, getOneThought} = require('../../controllers/thought-controller')

// get all thoughts
router.route('/').get(getAllThought).post(addThought)

// post/ create thought
router.route('/').post(addThought);

// Updates thoughts
router.route('/:thoughtId')
.put(updateThought)
.delete(removeThought)
.get(getOneThought)

// ADD AND DELETE REACTOONS
router.route('/:thoughtId/').post(addReaction)

router.route('/:thoughtId/:reactionId').delete(removeReaction)
module.exports=router