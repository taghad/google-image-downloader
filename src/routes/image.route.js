const express = require('express');
const {imageController} = require("../controllers");
const router = express.Router();
const searchValidation = require('../validations/search.validation');
const validate = require('../middlewares/validate');

router.post('/searchImages', validate(searchValidation.searchImages), imageController.searchImage);
router.get('/getImages', imageController.getSearchImageResult);

module.exports = router;