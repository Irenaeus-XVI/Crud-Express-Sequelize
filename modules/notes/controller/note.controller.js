import notesSchema from "../../../db/models/note.model.js";
import { userSchema } from "../../../db/models/user.model.js";


//NOTE - 1- add note
export const addNote = async (req, res) => {
    const { title, content, userID } = req.body;
    try {
        const note = await notesSchema.create({ title, content, userID });
        res.status(200).json({ Message: "Note Added Successfully.", note });
    } catch (err) {
        res.status(500).json({ Message: err })
    };
}

//NOTE - 2- delete note (note creator only )
export const deleteNote = async (req, res) => {
    const { title, userID } = req.body;

    const deletedNote = await notesSchema.destroy({
        where: {
            title,
            userID
        }
    });


    deletedNote > 0 ? res.status(200).json({ Message: "Note Deleted.", deletedNote }) : res.status(500).json({ Message: "Note Not Found || You Are Nor Authorized To Delete This Note .", deletedNote })

}

//NOTE - 3- update note (note owner only) 
export const updateNote = async (req, res) => {

    const { id, title, content, userID } = req.body;
    try {
        const updatedNote = await notesSchema.update({ title, content }, {
            where: {
                id,
                userID
            }
        });
        updatedNote[0] ? res.status(200).json({ Message: "Note Updated Successfully", updatedNote }) : res.status(500).json({ Message: "Note Not Found || You Are Nor Authorized To Delete This Note .", updatedNote });
    } catch (err) {
        res.status(500).json({ err });
    }

}

//NOTE - 4- get all notes
export const getAllNotes = async (req, res) => {
    const notes = await notesSchema.findAll();
    notes.length ? res.status(200).json({ Message: "Success.", notes }) : res.status(500).json({ Message: "No Notes Founded" })
}

//NOTE - 5- get all notes with their owners information (using include)
export const getAllNotesOwners = async (req, res) => {
    const notes = await notesSchema.findAll({
        include: [
            { model: userSchema, attributes: ["id", "name", "email"] }
        ]
    });
    notes.length ? res.status(200).json({ Message: "Success.", notes }) : res.status(500).json({ Message: "No Notes Founded" })
}