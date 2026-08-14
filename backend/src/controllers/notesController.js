export const getAllNotes = (req, res) => {
    res.status(200).json({ message: "you got the 5 notes" });
};

export const createNote = (req, res) => {
    res.status(201).json({ message: "Note created successfully!" });
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