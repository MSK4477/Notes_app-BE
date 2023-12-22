import Notes from "../Database/Model/notes_schema.js";
import asyncHandler from "express-async-handler";

export const createNote = asyncHandler(async (req, res) => {
  const { notes } = req.body;

  const { id } = req;

  try {
    if (id) {
      const createNewNote = await Notes.create({ notes: notes, author: id });
      res
        .status(200)
        .json({ message: "Notes Added Succesfully", code: 1, createNewNote });
      return;
    }
  } catch (err) {
    res.status(400).json({ error: "Failed To Create Notes", code: 0, err });
  }
  res.status(500).json({ error: "Internal Server Error", code: 0 });
});

export const getNotes = asyncHandler(async (req, res) => {
  const { id } = req;

  try {
    if (!id) {
      res.status(409).json({ error: "User is not Authrozed", code: 0 });
    }

    const notes = await Notes.find({ author: id });

    if (notes) {
      res
        .status(200)
        .json({ message: "Notes Fetched Succesfully", data: notes });
    }
  } catch (err) {
    res
      .status(404)
      .json({
        error: "notes not available or user not authorized",
        code: 0,
        err,
      });
  }
});

export const updateNotes = asyncHandler(async (req, res) => {
  const { notes } = req.body;

  const { id } = req.params;

  try {
    if (id) {
      const note = await Notes.findByIdAndUpdate(id, req.body, { new: true });

      res
        .status(200)
        .json({ message: "Updated Succesfully", code: 1, data: note });

      return;
    }
  } catch (err) {
    res.status(400).json({ error: "can't update the note", err, code: 0 });
  }
  res.status(500).json({ error: "Internal Server Error", code: 0 });
});

export const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const delete_Note = await Notes.findOneAndDelete({ _id: id });

    if (!delete_Note) {
      return res.status(404).json({ message: "Note not found", code: 0 });
    }

    res
      .status(200)
      .json({ message: "Note deleted successfully", code: 1, delete_Note });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Can't delete the note, try again", code: 0 });
  }
});

