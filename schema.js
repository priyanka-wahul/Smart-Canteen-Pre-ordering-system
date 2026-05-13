const joi = require('joi');

module.exports.paymentSchema = joi.object({
    payment: joi.string().required()
});