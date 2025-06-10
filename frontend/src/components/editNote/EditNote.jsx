import './EditNote.css'
import { useState } from 'react';
import axios from 'axios';

const EditNote = ({ note, onUpdate, onCancel }) => {
	const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();

		const urlNote = `http://localhost:3000/api/notes/${note.id}`
		const formatNote = {
			title,
			content
		}
		axios
		.put(urlNote, formatNote)
		.then((response) => {
			onUpdate(response.data)
		})
		.catch(error => {
			console.error('Error updating the note:', error);
		})
  };

  return (
    <form className='edit-form' onSubmit={handleSubmit}>
      <input className='title-input' value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className='content-input' value={content} onChange={(e) => setContent(e.target.value)} />
			<div className='buttons-form'>
				<button type="submit" className='updateButton'>Save changes</button>
      	<button type="button" className='cancelButton' onClick={onCancel}>Cancel</button>
			</div>
    </form>
  );
};

export default EditNote;
