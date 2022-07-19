import { Router } from "express";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidation.js";
import { credentialSchema } from "../schemas/credentialSchemas.js";
import * as credentialControllers from "../controller/credentialController";

export const credentialRouter = Router();

credentialRouter.use(validateToken);
credentialRouter.post("/credential",validateSchema(credentialSchema),credentialControllers.create);
credentialRouter.get("/credentials", credentialControllers.get);
credentialRouter.get("/credential/:id", credentialControllers.getById);
credentialRouter.delete("/credential/:id", credentialControllers.deleteById);