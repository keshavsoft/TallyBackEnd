import express from 'express';

const router = express.Router();

import { router as routerFromVarshitha } from "./Varshitha/routes.js";
import { router as routerFromSunil } from "./Sunil/routes.js";

router.use("/Varshitha", routerFromVarshitha);
router.use("/Sunil", routerFromSunil);

export { router };