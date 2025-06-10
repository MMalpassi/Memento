import './Note.css'

const Note = ({ note, index, onDelete, onEdit, onArchive }) => {
  return (
    <div className="note">
      <h3>{index}. {note.title}</h3>
      <p>{note.content}</p>
      <button className='editButton' onClick={() => onEdit(note)}>Edit</button>
      <button className='deleteButton' onClick={() => onDelete(note.id)}>Delete</button>
        <button className='archiveButton' onClick={() => onArchive(note.id, !note.archived)}>
        {note.archived ? 'Unarchive' : 'Archive'}
      </button>
    </div>
  );
};

export default Note;