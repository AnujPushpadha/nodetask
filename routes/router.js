//router

import express from "express";
import {
  add,
  arr,
  cal,
  del,
  get,
  put,
  reset,
} from "../controller/controller.js";
const router = express.Router();

router.route("/").get(get);
router.route("/calculator").get(cal).put(put).delete(reset);
router.route("/todos").get(arr).post(add).delete(del);

export default router;
