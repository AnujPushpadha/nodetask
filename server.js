//server file

import express from "express";
import router from "./routes/router.js";
const app = express();
let arr = [1, 2, 3, 4, 5, 6];
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log("running on port 4000"));
