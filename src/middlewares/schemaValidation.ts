import {Request, Response, NextFunction} from "express";
import Joi from "joi";

export function validateSchema(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            return res
                .status(422)
                .send(validation.error.details.map((detail) => detail.message));
        }

        next();
    };
}