import express from 'express';
import notesSchema from '../../../db/models/note.model.js';
import { addNote, deleteNote, getAllNotes, updateNote, getAllNotesOwners } from '../controller/note.controller.js';
const notesRouter = express.Router();

//NOTE - 1- add note
notesRouter.post("/notes/addNote", addNote);

//NOTE - 2- delete note (note creator only )
notesRouter.delete("/notes/deleteNote", deleteNote);

//NOTE - 3- update note (note owner only) 
notesRouter.put("/notes/updateNote", updateNote);

//NOTE - 4- get all notes
notesRouter.get("/notes", getAllNotes);

//NOTE - 5- get all notes with their owners information (using include)
notesRouter.get("/notes/getAllNotesOwners", getAllNotesOwners);


export default notesRouter;   