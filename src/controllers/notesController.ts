// Notes Controller layer handles the incoming requests and outgoing responses

import { Router, Request, Response, NextFunction } from "express";
import { createNoteValidator } from "middleware/validators/noteValidator";
import NotesService from "services/notesService";

const router = Router();
// Create an instance for NotesService
const notesService = new NotesService();

// Creates a new note
router.post("/", createNoteValidator, async (req: Request, res: Response) => {
  console.log("create", createNoteValidator);
  const newNote = await notesService.create(req.body);
  res.status(201).json(newNote);
});

// Fetches a note by id
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const note = await notesService.getById(id).catch((error) => {
    next(error);
  });
  res.status(200).json(note);
});

// Fetches all available notes
router.get("/", async (req: Request, res: Response) => {
  const notes = await notesService.getAll();
  res.status(200).json(notes);
});

// Updates an existing note by id
router.put("/", async (req: Request, res: Response) => {
  const { id, note } = req.body;
  const updatedNote = await notesService.updateById(id, note);
  res.status(201).json(updatedNote);
});

// Deletes a note by id
router.delete("/", async (req: Request, res: Response) => {
  const { id } = req.body;
  const deletedNote = await notesService.deleteById(id);
  res.status(204).json(deletedNote);
});

export default router;