export default class Note {
  constructor({ title, body }, noteManager) {
    this.title = title;
    this.body = body;
    this.noteManager = noteManager;
  }

  getElement() {
    const tpl = this.getTemplate();
    const tmpDiv = document.createElement("div");
    tmpDiv.innerHTML = tpl
      .replace("{{title}}", this.title)
      .replace("{{body}}", this.body);
    this.el = tmpDiv.children[0];

    this.attachEventListeners();

    return this.el;
  }

  getTemplate() {
    return `
        <div class="tc-note">
            <div class="tc-note-header">
                <span class="tc-note-close">
                    <i class="fas fa-times"></i>
                </span>
            </div>
            <div class="tc-note-title" contenteditable>
                {{title}}
            </div>
            <div class="tc-note-body" contenteditable>
                {{body}}
            </div>
        </div>
    `;
  }

  attachEventListeners() {
    const btnClose = this.el.querySelector(".tc-note-close");
    btnClose.onclick = () => {
      this.noteManager.removeNote(this);
    };
  }
}
