import express from 'express';

const router = express.Router();

import { router as routerFromItemsWithGroups } from "./ItemsWithGroups/routes.js";

router.use("/ItemsWithGroups", routerFromItemsWithGroups);

export { router };