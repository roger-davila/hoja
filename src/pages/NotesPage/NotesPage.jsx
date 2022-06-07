import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import NotesList from '../../components/NotesList/NotesList';
export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, []);
  return (
    <main className='main-container'>
      <h1>Notes</h1>
      <NotesList notes={notes} />
    </main>
  )
} 