import { Router } from "express";

import * as documentControllers from "../controller/documentController.js";
import { validateSchema } from "../middlewares/schemaValidation";
import { documentSchema } from "../schemas/documentSchemas.js";

export const documentRouter = Router();

documentRouter.post("/document",validateSchema(documentSchema),documentControllers.create);
documentRouter.get("/documents", documentControllers.get);
documentRouter.get("/document/:id", documentControllers.getById);
documentRouter.delete("/document/:id", documentControllers.deleteById);