import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NoteArea from "./NoteArea";
import NotesDisplay from "./NotesDisplay";
import Search from './Search'

function App() {
  const [notes, setNotes] = useState([])

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

  return (
    <main className="App">
      <NotesDisplay notes={notes} deleteNote={deleteNote}/>
      <NoteArea createNote={createNote}/>
      <Search notes={notes} deleteNote={deleteNote} />
    </main>
  );
}

export default App;
