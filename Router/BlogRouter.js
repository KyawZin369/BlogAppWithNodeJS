const express = require('express');
const blogController = require('../controller/BlogController');
const router = express.Router();


router.get('/', blogController.index_page);
router.post('/', blogController.post_Blog);
router.get('/create/blog', blogController.Create_Blog);
router.get('/:id', blogController.get_Blog_details);
router.delete('/:id', blogController.Delete_Blog);

module.exports = router;
