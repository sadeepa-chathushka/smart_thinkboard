import Note from '../models/Note.js';

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Error retrieving notes", error: error.message });
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const saveNote = await note.save();
        res.status(201).json({ message: "Note created successfully!", note: saveNote });
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Error creating note", error: error.message });
    }
};

export const updateNote = (req, res) => {
    res.status(200).json({ message: `Note with ID ${req.params.id} updated successfully!` });
};

export const deleteNote = (req, res) => {
    res.status(200).json({ message: `Note with ID ${req.params.id} deleted successfully!` });
};

// use that style 
// export function getAllNotes (req, res) {
//     res.status(200).json({ message: "you got the 5 notes" });
// };