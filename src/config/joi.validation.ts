import * as Joi from 'joi'

export const JoiValidationSchema = Joi.object({
    MONGO_DB: Joi.required(),
    PORT: Joi.number().default(3000),
    DEFAULT_LIMIT: Joi.number().default(10),
    DEFAULT_OFFSET: Joi.number().default(0),
})
