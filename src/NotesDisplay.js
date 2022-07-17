import React from 'react'
import Note from "./Note";

export default function NotesDisplay({notes, deleteNote}) {
  return (
    <section>
      <h4>All your Notes ({notes.length} Notes)</h4>
      <div className='note_container'>
        {notes.map((note) =>{
           return <Note key={note.id} note={note} deleteNote={deleteNote}/>
        })}
        {/* <div className='note_box'>
            <div>
                <span className='note_text'>first note </span>
                
            </div>
            <div className='delete_box'>
                <button type='button' className='delete_btn button'>Delete</button>
            </div>
            
        </div> */}
      </div>
    </section>
  )
}
