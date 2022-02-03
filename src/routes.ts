import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";
import pino from "pino";

const logger = pino();

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Bem vindo a API Dio Shopping" });
});

router.get("/message", loggerRequest, listMessageController.hanle);
router.post("/message", loggerRequest, createMessageController.handle);

export { router };

async function loggerRequest(req, res, next) {
  logger.info(`[${req.method}] ${req.url}`);
  return next();
}
