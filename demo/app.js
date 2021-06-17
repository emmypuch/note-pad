import "./style.scss";
import NoteManager from "../src/NoteManager";

const noteManager = new NoteManager({
  el: document.querySelectorAll(".tc-notes")[0],
  notes: [
    {
      title: "Add Title",
      body: "Lorem....",
    },
    {
      title: "Add Title",
      body: "Lorem...",
    },
    {
      title: "Add Title",
      body: "Lorem...",
    },
    {
      title: "Add Title",
      body: "Lorem...",
    },
  ],
});

noteManager.onNewNote = (noteObj) => {
  console.log(noteObj);
};

noteManager.onNoteChange = (noteObj) => {
  console.log(noteObj);
};

noteManager.onNewRemove = () => {};

const newNoteBtn = document.querySelector(".new-note-btn");
newNoteBtn.addEventListener("click", () => {
  noteManager.prependNote({
    title: "",
    body: "",
  });
});
