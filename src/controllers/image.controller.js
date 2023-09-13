const httpStatus = require('http-status');
const {imageService} = require('../services');
const catchAsync = require('../utils/catchAsync');
const image = require('../models/image.model');
const logger = require('../config/logger.config')

const searchImage = catchAsync(async (req, res) => {
    logger.error(req.body);
    const images = await imageService.createImages(req.body);
    res.status(httpStatus.CREATED).send(images.toString());
});

const getSearchImageResult = catchAsync(async (req, res) => {
    res.status(httpStatus.CREATED).send("");

});

module.exports = {
    searchImage,
    getSearchImageResult,
};