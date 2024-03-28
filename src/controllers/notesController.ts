import { Router, Request, Response } from "express";
import { createNoteValidator } from "middleware/validators/noteValidator";
import { createNote } from "services/notesService";

const router = Router();

router.post("/", createNoteValidator, async (req: Request, res: Response) => {
  const newNote = await createNote(req.body);
  res.status(201).json(newNote);
});


router.get("/:id", async (req: Request, res: Response) => {

});

router.get("/", async (req: Request, res: Response) => {

});

router.put("/", async (req: Request, res: Response) => {

});

router.delete("/", async (req: Request, res: Response) => {

});

export default router;