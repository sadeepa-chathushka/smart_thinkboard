import Note from '../models/Note.js';

export const getAllNotes = async (req, res) => {
    try {
        const notes = (await Note.find()).toSorted({ createdAt: -1 }); // Sort notes by createdAt in descending order
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving notes", error: error.message });
    }
};

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving note", error: error.message });
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const saveNote = await note.save();
        res.status(201).json({ message: "Note created successfully!", note: saveNote });
    } catch (error) {
        res.status(500).json({ message: "Error creating note", error: error.message });
    }
};

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: "Error updating note", error: error.message });
    }

};

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error: error.message });
    }
};

// use that style 
// export function getAllNotes (req, res) {
//     res.status(200).json({ message: "you got the 5 notes" });
// };

// export scync function getAllNotes (req, res) {
//     res.status(200).json({ message: "you got the 5 notes" });
// };