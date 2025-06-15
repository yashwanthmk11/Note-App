import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'; // import theme styles

const App = () => {
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState('light');

  const fetchNotes = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/notes');
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async (noteText) => {
    try {
      const res = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: noteText }),
      });
      const newNote = await res.json();
      setNotes((prev) => [...prev, newNote]);
    } catch (err) {
      console.error('Error adding note:', err);
    }
  };

  const handleToggleNote = async (id) => {
    const updated = notes.map((note) =>
      note._id === id ? { ...note, done: !note.done } : note
    );
    setNotes(updated);

    await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !notes.find((n) => n._id === id).done }),
    });
  };

  const handleDeleteNote = async (id) => {
    setNotes(notes.filter((note) => note._id !== id));
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: 'DELETE' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app-container ${theme}`}>
      <div className="app-box">
        <div className="theme-switch" onClick={toggleTheme}>
  <div className={`switch ${theme === 'dark' ? 'dark' : 'light'}`}>
    <div className="icon">{theme === 'dark' ? '🌙' : '☀️'}</div>
  </div>
</div>

        <h1>📝 My Notes</h1>
        <NoteForm onNoteAdded={handleAddNote} />
        <NoteList
          notes={notes}
          onNoteToggled={handleToggleNote}
          onNoteDeleted={handleDeleteNote}
        />
      </div>
    </div>
  );
};

export default App;