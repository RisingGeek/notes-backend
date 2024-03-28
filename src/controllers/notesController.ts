// Notes Controller layer handles the incoming requests and outgoing responses

import { Router, Request, Response, NextFunction } from "express";
import { createNoteValidator } from "middleware/validators/noteValidator";
import NotesService from "services/notesService";

const router = Router();
// Create an instance for NotesService
const notesService = new NotesService();

// Creates a new note
router.post("/", createNoteValidator, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newNote = await notesService.create(req.body);
    res.status(201).json(newNote);
  } catch (err) {
    next(err);
    console.error(err);
  }
});

// Fetches a note by id
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const note = await notesService.getById(id);
    res.status(200).json(note);
  } catch (err) {
    next(err);
    console.error(err);
  }
});

// Fetches all available notes
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await notesService.getAll();
    res.status(200).json(notes);
  } catch (err) {
    next(err);
    console.error(err);
  }
});

// Updates an existing note by id
router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { note } = req.body;
    const { id } = req.params;
    const updatedNote = await notesService.updateById(id, note);
    res.status(201).json(updatedNote);
  } catch (err) {
    next(err);
    console.error(err);
  }
});

// Deletes a note by id
router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedNote = await notesService.deleteById(id);
    res.status(204).json(deletedNote);
  } catch (err) {
    next(err);
    console.error(err);
  }
});

export default router;