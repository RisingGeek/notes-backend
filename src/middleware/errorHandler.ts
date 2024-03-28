import { Request, Response, NextFunction } from "express";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  // If response is already send, delegate it to default express error handler
  if (res.headersSent) {
    next(error);
  }
  return res.status(500).json({
    err: error.message
  });
};

export default errorHandler;