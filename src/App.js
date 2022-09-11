import React, { useState, useEffect } from 'react'
import NoteArea from "./NoteArea";
import NotesDisplay from "./NotesDisplay";
import Search from './Search'

const LS = "NA_LocalStorage"

function getStoredList() {
  let list = localStorage.getItem(LS)
  
  if(list)  return JSON.parse(list)
  else return []
}

function App() {
  const [notes, setNotes] = useState(getStoredList())

  const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  const createNote = (note)=>{
    const newNote = {id: uid(), text: note}
    setNotes([...notes, newNote])
    
  }

  const deleteNote = (id) =>{
    const filteredNotes = notes.filter((note)=>{
      return note.id !== id
    })

    setNotes(filteredNotes)
  }

  useEffect(() => {  
    localStorage.setItem(LS, JSON.stringify(notes))
  }, [notes]);

  return (
    <div id='container'>
      <h1>Notes Application</h1>
      <h4 className='subtext'>Make a list of things you want to do</h4>
      <div>
        <code>
          Designed and developed by <a href="https://freecodecamp.org/reujoe" rel='noopener noreferrer' target="_blank" className="me">Joseph Amofa</a> 
        </code>
      </div>
      <main className="App">
        <NotesDisplay notes={notes} deleteNote={deleteNote}/>
        <NoteArea createNote={createNote}/>
        <Search notes={notes} deleteNote={deleteNote} />
      </main>
    </div> 
    
  );
}

export default App;
