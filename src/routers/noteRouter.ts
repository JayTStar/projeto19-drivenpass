import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidation.js";
import { noteSchema } from "../schemas/noteSchemas.js";
import * as noteControllers from "../controller/noteController.js"

export const noteRouter = Router();

noteRouter.post("/securenote", validateSchema(noteSchema), noteControllers.create);
noteRouter.get("/securenotes", noteControllers.get);
noteRouter.get("/securenote/:id", noteControllers.getById);
noteRouter.delete("/securenote/:id", noteControllers.deleteById);