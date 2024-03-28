import Note from "models/noteSchema";
import { INote } from "types/note.type";

class NotesRepository {
  async create(note: INote) {
    console.log("repo");
    const newNote = new Note(note);
    try {
      await newNote.save();
    } catch (err) {
      throw err;
    }
    console.log("inside");

    return newNote;
  }

  async getById(id: string) {
    let note = null;
    try {
      note = await Note.findById(id);
    } catch (err) {
      throw err;
    }

    return note;
  }

  async getAll() {
    let notes = [];
    try {
      notes = await Note.find();
    } catch (err) {
      throw err;
    }
    return notes;
  }

  async updatebyId(id: string, noteData: INote) {
    let note = null;
    try {
      note = await Note.findByIdAndUpdate(id, noteData);
    } catch (err) {
      throw err;
    }
    return note;
  }

  async deleteById(id: string) {
    let note = null;
    try {
      note = await Note.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
    return note;
  }
}

export default NotesRepository;