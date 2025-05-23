import express from 'express';

const router = express.Router();

import { router as routerFromShowAll } from "./ShowAll/routes.js";
import { router as routerFromDelete } from "./Delete/routes.js";
import { router as routerFromAlter } from "./Alter/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromInsertWithPkAndUuidAndDateTime } from "./InsertWithPkAndUuidAndDateTime/routes.js";

router.use("/ShowAll", routerFromShowAll);
router.use("/Delete", routerFromDelete);
router.use("/Alter", routerFromAlter);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/InsertWithPkAndUuidAndDateTime", routerFromInsertWithPkAndUuidAndDateTime);

export { router };