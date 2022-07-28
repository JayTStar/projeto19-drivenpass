import { Router } from "express";

import { validateSchema } from "../middlewares/schemaValidation.js";
import { wifiSchema } from "../schemas/wifiSchemas.js";
import * as wifiControllers from "../controller/wifiController.js";

export const wifiRouter = Router();

wifiRouter.post("/wifi", validateSchema(wifiSchema), wifiControllers.create);
wifiRouter.get("/wifi", wifiControllers.get);
wifiRouter.get("/wifi/:id", wifiControllers.getById);
wifiRouter.delete("/wifi/:id", wifiControllers.deleteById);