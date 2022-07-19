import { Router } from "express";

import * as userControllers from "../controller/usersController.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { userSchema } from "../schemas/userSchemas.js";
import { validateToken } from "../middlewares/authMiddleware.js";

export const userRouter = Router();

userRouter.post("/signup", validateSchema(userSchema), userControllers.signup);
userRouter.post("/signin", validateSchema(userSchema), userControllers.signin);
userRouter.get("/info", validateToken, userControllers.getUserInfo)