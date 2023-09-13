const httpStatus = require('http-status');
const {Image} = require('../models');
const logger = require('../config/logger.config')
const gis = require('async-g-i-s');
const createImages = async (url) => {


    const results = await gis("banana");
    console.log(results.slice(0, url.downloadLimit)[0]);

    logger.error(url.downloadLimit);
    return Image.create({image: image, url: url});
};

const queryImages = async (filter, options) => {
    const images = await Image.paginate(filter, options);
    return images;
};

module.exports = {
    createImages,
    queryImages,
};