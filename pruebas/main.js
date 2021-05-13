let db = null
const btnCreateDB = document.getElementById("btnCreateDB")
const btnAddNote = document.getElementById("btnAddNote")
const btnViewNotes = document.getElementById("btnViewNotes")

btnCreateDB.addEventListener('click', createDB)
btnAddNote.addEventListener("click", addNote)
btnViewNotes.addEventListener("click", viewNotes)

function createDB() {
    const dbName = document.getElementById("txtDB").value
    const dbVersion = document.getElementById("txtVersion").value

    const request = indexedDB.open(dbName,dbVersion)

    //on upgrade needed
    request.onupgradeneeded = e => {
        db = e.target.result
        /* note = {
             title: "note1",
             text: "this is a note"
         }*/
        const pNotes = db.createObjectStore("personal_notes", {keyPath: "title"})
        const todoNotes = db.createObjectStore("todo_notes", {keyPath: "title"})

        alert(`upgrade is called database name: ${db.name} version : ${db.version}`)

    }
    //on success
    request.onsuccess = e => {
        db = e.target.result
        alert(`success is called database name: ${db.name} version : ${db.version}`)
    }
    //on error
    request.onerror = e => {
        alert(`error: ${e.target.error} was found `)

    }


}

function addNote() {

    const note = {
        title: "note" + Math.random(),
        text: "This is my note"
    }

    const tx = db.transaction("personal_notes", "readwrite")
    tx.onerror = e => alert( ` Error! ${e.target.error}  `)
    const pNotes = tx.objectStore("personal_notes")
    pNotes.add(note)
}

function viewNotes() {

    const tx = db.transaction("personal_notes","readonly")
    const pNotes = tx.objectStore("personal_notes")
    const request = pNotes.openCursor()
    request.onsuccess = e => {

        const cursor = e.target.result

        if (cursor) {
            alert(`Title: ${cursor.key} Text: ${cursor.value.text} `)
            //do something with the cursor
            cursor.continue()
        }
    }

}