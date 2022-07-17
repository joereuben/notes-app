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

    function onInput(e){
        e.target.parentNode.dataset.replicatedValue = e.target.value
    }
    
  return (
    <section>
        <h4>Create Your Note</h4>
        <form action='' method='get' onSubmit={handleSubmit}>
            <div className='grow-wrap'>
                <textarea type="text" ref={inputRef} onChange={(e) => setNote(e.target.value)}
                onInput={onInput}/>
            </div>
            
            <div>
                <button type='submit' className='button' title='Save'>Save</button>
            </div>
            
        </form>
    </section>
  )
}
