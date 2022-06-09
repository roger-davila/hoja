import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import NotesList from '../../components/NotesList/NotesList';
import './NotesPage.css';
export default function NotesPage({user}) {
  const [notes, setNotes] = useState([]);
  let navigate = useNavigate();
  async function handleNewNote () {
    const newNote = await notesAPI.createNote();
    navigate(`/${user.name}/notes/${newNote._id}`);
  }
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
      <button className='add-note-button' onClick={handleNewNote}>+</button>
    </main>
  )
} 