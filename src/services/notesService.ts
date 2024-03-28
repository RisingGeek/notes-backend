import NotesRepository from "repository/notesRepository";
import { INote } from "types/note.type";

const notesRespository = new NotesRepository();

export const createNote = (note: INote) => {
  return notesRespository.create(note);
};

export const getNoteById = (id: string) => {

};

export const getallNotes = () => {

};

export const updateNoteById = (id: string, note: INote) => {

};

export const deleteNoteById = (id: string) => {

};