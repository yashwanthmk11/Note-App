import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, onNoteToggled, onNoteDeleted }) => {
  return (
    <div className="note-list-container">
      <h2>Your Notes</h2>
      <div className="note-box">
        {notes.length === 0 ? (
          <p className="empty-msg">No notes yet. Add something!</p>
        ) : (
          notes.map((note) => (
            <div className={`note-item ${note.done ? 'done' : ''}`} key={note._id}>
              <span className="note-text">{note.text}</span>
              <div className="note-actions">
                <button
                  className="toggle-btn"
                  onClick={() => onNoteToggled(note._id)}
                >
                  {note.done ? 'Undo' : 'Done'}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => onNoteDeleted(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NoteList;
