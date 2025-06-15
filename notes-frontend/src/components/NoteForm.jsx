import React, { useState } from 'react';

const NoteForm = ({ onNoteAdded }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Note cannot be empty");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      onNoteAdded(data);
      setText('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter note"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '70%',
          marginRight: '10px',
        }}
      />
      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
