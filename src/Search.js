import React, {useState, useEffect} from 'react'
import Note from "./Note";

export default function Search({notes, deleteNote}) {

    const [query, setQuery] = useState("")
    const [queriedNotes, setQueriedNotes] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (query === '' || notes.length === 0) return
        
        searchNotes()
    }

    const searchNotes = ()=>{
        const foundNotes = notes.filter((note)=>{
            return note.text.toLowerCase().includes(query.toLowerCase())
        })
        setQueriedNotes(foundNotes)
    }

    useEffect(() => {
        const updated = queriedNotes.filter((qnote)=>{
            return notes.find((note)=>{
                return qnote.id === note.id
            })
        })

        setQueriedNotes(updated)
    }, [notes]);

    //deletes from search list before deleting from notes array
   
  return (
    <section>
        <h4>Search Notes</h4>
        <div>
            <form action='' method='get' onSubmit={handleSubmit}>
                <input type="text" value={query}  onChange={(e) => setQuery(e.target.value)}/>
                <button type='submit' className='button'>Search</button>
            </form>
        </div>

        <div className='note_container'>
        {queriedNotes.map((note) =>{
           return <Note key={note.id} note={note} deleteNote={deleteNote}/>
        })}
        </div>

    </section>
  )
}
