import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPkAndUuidAndDateTime } from "./InsertWithPkAndUuidAndDateTime/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromShowAll } from "./ShowAll/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";

router.use("/InsertWithPkAndUuidAndDateTime", routerFromInsertWithPkAndUuidAndDateTime);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/ShowAll", routerFromShowAll);
router.use("/Delete", routerFromDelete);
router.use("/Alter", routerFromAlter);

export { router };