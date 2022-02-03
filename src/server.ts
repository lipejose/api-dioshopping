import "reflect-metadata";
import express from "express";
import cors from "cors";
import pino from "pino";

const logger = pino();

import { router } from "./routes";

import "./database";

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

app.listen(5000, () => {
  logger.info("server on port: 5000");
});
