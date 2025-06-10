import './CreateNote.css'
import React, { useState } from "react";
import axios from 'axios'

const CreateNote = ({noteCreated}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const note = {title, content}

  const handleSubmit = (e) => {
    e.preventDefault()

    const urlNote = `http://localhost:3000/api/notes`
    axios
    .post(urlNote, note)
    .then(response => {
      noteCreated(response.data)
      setTitle('');
      setContent('');
    })
    .catch (error => {
      console.error('Error creating the note:', error);
    })
  };
    
  return (
    <div className='container'>
      <h3 className='form-title'>Create new note:</h3>
      <form className='form' onSubmit={handleSubmit}>
        <input name='title' className='input-form' value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br/>
        <textarea name='content' className='textarea-form' value={content} onChange={(e) => setContent(e.target.value)} required />
        <br/>
        <button type='submit' className='saveButton'>Save Note</button> 
      </form>
    </div>
    )
}

export default CreateNote;