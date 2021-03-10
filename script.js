const addNote = document.querySelector(".add");
const notePanel = document.querySelector(".note-panel");
const textArea = document.querySelector('#text')
const saveBtn = document.querySelector(".save")
const cancelBtn = document.querySelector(".cancel")
const noteArea = document.querySelector(".note-area")
let id = 0

addNote.addEventListener("click", () => {
 notePanel.style.display = "flex"
})

cancelBtn.addEventListener('click', () => {
    notePanel.style.display = "none"
}
)


saveBtn.addEventListener('click', () => {
    const text = textArea.value
    const note = document.createElement("div")
    note.classList.add('note')
    const noteHeader = document.createElement('div')
    noteHeader.classList.add('note-header')
    
    const noteTitle = document.createElement('h3')
    noteTitle.classList.add('note-title')

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-note')
    deleteBtn.innerHTML =  `<i class="fas fa-times icon"></i>`

    const noteBody = document.createElement('div')
    noteBody.classList.add('note-body')
    noteBody.innerText = text


    noteHeader.innerText = 'Notatka'
    note.appendChild(noteHeader)
    noteHeader.appendChild(deleteBtn)
    note.appendChild(noteTitle)
    note.appendChild(noteBody)
    noteArea.appendChild(note)
    note.setAttribute("id", id)
    deleteBtn.setAttribute("id", id)
    id++
}
)

const checkForDeleteNote = (e) => {
  if (e.target.closest("button").classList.contains('delete-note')) {
      const del = e.target.closest("button").id
      const del2 = document.getElementById(del)
      deleteNote(del2)
  }

}

const deleteNote = (del2) => {   
    noteArea.removeChild(del2)
}

noteArea.addEventListener('click', checkForDeleteNote)