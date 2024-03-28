import { Router, Request, Response } from "express";
import { createNote } from "services/notesService";

const router = Router();

router.post("/create-note", (req: Request, res: Response) => {
  const newNote = createNote();
  res.status(201).json(newNote);
});

export default router;