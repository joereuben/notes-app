import React, {useState} from 'react'
import { AiFillDelete } from "react-icons/ai";

export default function Note({note, deleteNote}) {

    const [showMore, setShowMore] = useState(false)
    const {id, text} = note

  return (
    <div className='note_box'>
      <div>
        <span className='note_text'>
            {/* If text is 50 or less characters, show the text without any truncation,
             other wise display with possible truncation(depending on value of showMore) */}
            {(text.length <= 50) ? text :
            showMore ? text : `${text.substring(0,50)}...`}

            {/* If text is more than 50 characters, display the "show more" button */}
            {(text.length > 50) && <button className='note_text_toggle_btn' onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}</button>}
            
        </span>
        
      </div>
      <div className='delete_box'>
        <button type='button' className='delete_icon' onClick={()=> deleteNote(id)} title="Delete">
            <AiFillDelete />
        </button>
      </div>
    </div>
  )
}
