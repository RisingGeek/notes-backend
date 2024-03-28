import Note from "models/noteSchema";
import { INote } from "types/note.type";

class NotesRepository {
  async create(note: INote) {
    const newNote = new Note(note);
    try {
      await newNote.save();
    } catch (err) {
      throw new Error("Unable to create new Note");
    }
  }

  async getById(id: string) {
    let note = null;
    try {
      note = Note.findById(id);
    } catch (err) {
      throw new Error("Unable to get note by id");
    }

    return note;
  }

  async getAll() {
    let notes = [];
    try {
      notes = await Note.find();
    } catch (e) {
      throw new Error("Unable to get all notes");
    }
    return notes;
  }

  async updatebyId(id: string, noteData: INote) {
    let note = null;
    try {
      note = await Note.findByIdAndUpdate(id, noteData);
    } catch (e) {
      throw new Error("Unable to update note");
    }
    return note;
  }

  async deleteById(id: string) {
    let note = null;
    try {
      note = await Note.findByIdAndDelete(id);
    } catch (e) {
      throw new Error("Something went wrong!");
    }
    return note;
  }
}

export default NotesRepository;