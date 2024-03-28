// Notes Controller layer handles the incoming requests and outgoing responses

import { Router, Request, Response } from "express";
import { createNoteValidator } from "middleware/validators/noteValidator";
import NotesService from "services/notesService";

const router = Router();
// Create an instance for NotesService
const notesService = new NotesService();

// Creates a new note
router.post("/", createNoteValidator, async (req: Request, res: Response) => {
  const newNote = await notesService.create(req.body);
  res.status(201).json(newNote);
});

// Fetches a note by id
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.body;
  const note = notesService.getById(id);
  res.status(200).json(note);
});

// Fetches all available notes
router.get("/", async (req: Request, res: Response) => {
  const notes = notesService.getAll();
  res.status(200).json(notes);
});

// Updates an existing note by id
router.put("/", async (req: Request, res: Response) => {
  const { id, note } = req.body;
  const updatedNote = notesService.updateById(id, note);
  res.status(201).json(updatedNote);
});

// Deletes a note by id
router.delete("/", async (req: Request, res: Response) => {
  const { id } = req.body;
  const deletedNote = notesService.deleteById(id);
  res.status(204).json(deletedNote);
});

export default router;