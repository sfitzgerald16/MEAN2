const router = require('express').Router();
const authorsController = require('../../controllers/authors');

router.get('', authorsController.index);
router.get('/new', authorsController.new);
router.get('/:author_id', authorsController.show);
router.post('', authorsController.create);

module.exports = router;
