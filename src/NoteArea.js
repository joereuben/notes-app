import React,{useState, useRef} from 'react'

export default function NoteArea({createNote}) {

    const [note, setNote] = useState("")
    const inputRef = useRef()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (note === '') return
        // console.log(note);
        createNote(note)
        inputRef.current.value = ""
    }
    
  return (
    <section>
        <h4>Create Your Note</h4>
        <form action='' method='get' onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} onChange={(e) => setNote(e.target.value)}/>
            <button type='submit' className='button'>Save</button>
        </form>
    </section>
  )
}
