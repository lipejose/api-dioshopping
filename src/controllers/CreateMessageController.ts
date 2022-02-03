import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import pino from "pino";

const logger = pino();

class CreateMessageController {
  async handle(request: Request, response: Response) {
    try {
      const { email, message } = request.body;

      const createMessageService = new CreateMessageService();

      const newMessage = await createMessageService.execute({ email, message });

      return response.json(newMessage);
    } catch (err) {
      logger.info(JSON.stringify(err));
      return response.status(500).json({ error: err.message });
    }
  }
}

export { CreateMessageController };
