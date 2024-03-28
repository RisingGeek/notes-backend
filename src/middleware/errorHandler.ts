import { NextFunction } from "express";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("error", error);
  return res.status(500).send();
};

export default errorHandler;