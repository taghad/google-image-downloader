const Joi = require('joi');

const searchImages = {
    body: Joi.object().keys({
        url: Joi.string().required(),
        downloadLimit: Joi.number().required(),
    }),
};

module.exports = {
    searchImages,
};