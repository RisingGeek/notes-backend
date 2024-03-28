import NotesRepository from "repository/notesRepository";
import { INote } from "types/note.type";


// Notes Service Layer contains the business logic for Notes
class NotesService {
  private notesRepository: NotesRepository;
  constructor() {
    // Create an instance of NotesRepository
    this.notesRepository = new NotesRepository();
  }

  create = (note: INote) => {
    return this.notesRepository.create(note);
  };

  getById = (id: string) => {
    // throw new Error("some error");
    return this.notesRepository.getById(id);
  };

  getAll = () => {
    return this.notesRepository.getAll();
  };

  updateById = (id: string, note: INote) => {
    return this.notesRepository.updatebyId(id, note);
  };

  deleteById = (id: string) => {
    return this.notesRepository.deleteById(id);
  };
}

export default NotesService;