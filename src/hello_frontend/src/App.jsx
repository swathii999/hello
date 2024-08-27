import React, { useState } from 'react';
import './index.scss';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <div className="note-input">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a new note"
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div key={index} className="note-item">
              <span>{note}</span>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No notes available</p>
        )}
      </div>
    </div>
  );
};

export default App;
