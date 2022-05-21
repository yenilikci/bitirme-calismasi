const Joi = require("joi");

const createValidation = Joi.object({
    type: Joi.string().min(1),
    title: Joi.string().min(8).max(255),
    description: Joi.string().min(8).max(2048),
    slug: Joi.string().min(8).max(255),
    coverImage: Joi.string(),
    author: Joi.string().min(3).max(255),
    wsl: Joi.array()
});

const updateValidation = Joi.object({
    type: Joi.string().min(1),
    title: Joi.string().min(8).max(255),
    description: Joi.string().min(8).max(2048),
    slug: Joi.string().min(8).max(255),
    coverImage: Joi.string(),
    author: Joi.string().min(3).max(255),
    wsl: Joi.array()
});

module.exports = {
    createValidation,
    updateValidation,
};
