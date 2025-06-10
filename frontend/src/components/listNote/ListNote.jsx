import React, { useEffect, useState } from 'react';
import CreateNote from '../createNote/CreateNote';
import Note from '../note/Note'
import EditNote from '../editNote/EditNote';
import axios from 'axios'
import './ListNote.css'


const ListNote = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [archivedNotes, setArchivedNotes] = useState([]);

  const getNotes = () => {
		const urlNote = `http://localhost:3000/api/notes`
		axios
		.get(urlNote)
		.then(response => {
			setNotes(response.data.filter(note => !note.archived))
      setArchivedNotes(response.data.filter(note => note.archived));
		})
		.catch(error => {
			console.error('Error fetching the notes:', error)
		})
  }
  
  const deleteNote = (id) => {
    const urlNote = `http://localhost:3000/api/notes/${id}`
    axios
    .delete(urlNote)
    .then(() => {
      setNotes(notes.filter((note) => note.id !== id))
    })
  }

  const editNote = (noteToUpdate) => {
    setNotes(prevNotes => prevNotes.map(note => (note.id === noteToUpdate.id ? noteToUpdate : note)));
    setEditingNote(null);
  }

  useEffect(() => {
    getNotes()
  }, [])

  const handleNoteCreated = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  }

  const handleArchive = async (id, archive) => {
    
    const endpoint =  { archived: archive }
    const urlNote = `http://localhost:3000/api/notes/${id}`

    axios
    .patch(urlNote, endpoint)
    .then(response => {
      const updatedNote = response.data;

      if (archive) {
        setNotes(prev => prev.filter(note => note.id !== id));
        setArchivedNotes(prev => [...prev, updatedNote]);
      } else {
        setArchivedNotes(prev => prev.filter(note => note.id !== id));
        setNotes(prev => [...prev, updatedNote]);
      }
    })
  }

  return (
  <div className='list-container'>
    <CreateNote noteCreated={handleNoteCreated} />
    <h2 className='notes-title'>Notes:</h2>

    {notes.length === 0 && archivedNotes.length === 0 ? (
      <p className='no-notes'>No notes yet... Try creating a new one!</p>
    ) : (
      <>
        {editingNote ? (
          <EditNote note={editingNote} onUpdate={editNote} onCancel={() => setEditingNote(null)}/>
        ) : (
          <>
            {notes.length > 0 && (
              <div className='notes-section'>
                <h3 className='active-notes-title'>Active Notes:</h3>
                {notes.map((note, index) => (
                  <Note key={note.id} note={note} index={index+1} onDelete={deleteNote} onEdit={setEditingNote} onArchive={handleArchive}/>
                ))}
              </div>
            )}

            {archivedNotes.length > 0 && (
              <div className='notes-section'>
                <h3 className='active-notes-title'>Archived Notes:</h3>
                {archivedNotes.map((note, index) => (
                  <Note key={note.id} note={note} index={index+1} onDelete={deleteNote} onEdit={setEditingNote} onArchive={handleArchive}/>
                ))}
              </div>
            )}
          </>
        )}
      </>
    )}
  </div>
  )
}

export default ListNote;
