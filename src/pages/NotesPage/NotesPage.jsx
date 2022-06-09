import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import NotesList from '../../components/NotesList/NotesList';
import PopupDrawer from '../../components/PopupDrawer/PopupDrawer';
import './NotesPage.css';
export default function NotesPage({ user }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, []);

  return (
    <main className=' NotesPage main-container'>
      <h1 className='header'>Notes</h1>
      <NotesList notes={notes} user={user} />
      <PopupDrawer page={'notes'} user={user} />
    </main>
  )
} 