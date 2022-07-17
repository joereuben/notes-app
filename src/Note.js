import React from 'react'

export default function Note({note, deleteNote}) {
  return (
    <div className='note_box'>
      <div>
        <span className='note_text'>{note.text}</span>
        
      </div>
      <div className='delete_box'>
        <button type='button' className='delete_btn button' onClick={()=> deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  )
}
