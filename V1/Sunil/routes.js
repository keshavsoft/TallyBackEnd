import express from 'express';

const router = express.Router();

import { router as routerFromItemWithGroup } from "./ItemWithGroup/routes.js";

router.use("/ItemWithGroup", routerFromItemWithGroup);

export { router };