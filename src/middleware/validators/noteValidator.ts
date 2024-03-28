import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

// Validates create note request
export const createNoteValidator = [
  body("title").trim().not().isEmpty().withMessage("Title is required"),
  body("note").not().isEmpty().withMessage("Note is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      res.status(400).send({
        error: {
          code: "FIELDS_VALIDATION_ERROR",
          fields: result.array()
        }
      });
    }

    return next();
  }
];
