import { Router } from "express";
import { createNote, deleteNote, getNotes, updateNotes } from "../controllers/notes_controller.js";
import protect from "../Middlewares/auth_middleware.js"
const notesRouter = Router()

notesRouter.post("/postNotes", protect ,createNote)
notesRouter.get("/", protect ,getNotes)
notesRouter.post("/updateNotes/:id", protect ,updateNotes)
notesRouter.get("/deleteNotes/:id",  deleteNote)

export default notesRouter 