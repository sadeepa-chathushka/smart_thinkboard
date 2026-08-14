import express from 'express';
import { getAllNotes, createNote, updateNote, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

// app.get("/api/notes", (req, res) => {
//     res.send("you got the 5 notes");
// });

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;