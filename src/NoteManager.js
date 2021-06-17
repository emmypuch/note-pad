import Note from "./Note";

export default class NoteManager {
  constructor({ el, notes }) {
    this.el = el;
    this.notes = notes.map((note) => new Note(note, this));

    this.onNewNote = () => {};
    this.onNoteChange = () => {};
    this.onNewRemove = () => {};
    this.renderNotes();
  }

  renderNotes() {
    this.el.innerHTML = "";
    this.notes.forEach((note) => this.renderNote(note.getElement()));
  }
  renderNote(noteEl) {
    this.el.appendChild(noteEl);
  }

  removeNote(note) {
    this.notes.splice(this.notes.indexOf(note), 1);
    this.renderNotes();
  }

  addNote(note) {
    const noteObj = new Note(note, this);
    this.notes.push(noteObj);
    this.renderNotes();
    this.onNewNote(noteObj);
  }

  prependNote(note) {
    const noteObj = new Note(note, this);
    this.notes.unshift(noteObj);
    this.renderNotes();
    this.onNewNote(noteObj);
  }
}
