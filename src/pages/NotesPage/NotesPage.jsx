import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
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
    <h1>Notes Page</h1>
  )
} 