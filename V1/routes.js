import express from 'express';

const router = express.Router();

import { router as routerFromSunil } from "./Sunil/routes.js";

router.use("/Sunil", routerFromSunil);

export { router };