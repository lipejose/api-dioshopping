import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessagesService";
import pino from "pino";

const logger = pino();

class ListMessageController {
  async hanle(request: Request, response: Response) {
    try {
      const listMessageService = new ListMessageService();

      const allMessages = await listMessageService.execute();

      return response.json(allMessages);
    } catch (err) {
      logger.info(JSON.stringify(err));
      return response.status(500).json({ error: err.message });
    }
  }
}

export { ListMessageController };
