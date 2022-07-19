import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidation";
import { cardSchema } from "../schemas/cardSchemas.js";
import * as cardControllers from "../controller/cardController";

export const cardRouter = Router();

cardRouter.post("/card", validateSchema(cardSchema), cardControllers.create);
cardRouter.get("/cards", cardControllers.get);
cardRouter.get("/card/:id", cardControllers.getById);
cardRouter.delete("/card/:id", cardControllers.deleteById);