import "./style.scss";
import NoteManager from "../src/NoteManager";

const noteManager = new NoteManager({
  el: document.querySelectorAll(".tc-notes")[0],
  notes: [
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum?",
    },
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum?",
    },
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum?",
    },
    {
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum?",
    },
  ],
});
