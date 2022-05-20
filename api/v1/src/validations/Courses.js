const Joi = require("joi");

const createValidation = Joi.object({
    type: Joi.string().min(1),
    title: Joi.string().email().min(8).max(255),
    description: Joi.string().email().min(8).max(2048),
    coverImage: Joi.string(),
    author: Joi.string().email().min(3).max(255),
});

const updateValidation = Joi.object({
    type: Joi.string().min(1),
    title: Joi.string().email().min(8).max(255),
    description: Joi.string().email().min(8).max(2048),
    coverImage: Joi.string(),
    author: Joi.string().email().min(3).max(255),
});

module.exports = {
    createValidation,
    updateValidation,
};
