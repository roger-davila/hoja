import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import PopupDrawer from '../../components/PopupDrawer/PopupDrawer';
import './NoteDetailPage.css';

export default function NoteDetailPage({ user }) {
  const { noteId } = useParams();
  const [note, setNote] = useState({});
  const timer = useRef();
  const autoSave = useRef(false);

  useEffect(() => {
    async function getNote() {
      const note = await notesAPI.getNote(noteId);
      setNote(note);
    }
    getNote();
  }, []);

  useEffect(() => {
    if (autoSave.current) {
      timer.current = setTimeout(() => notesAPI.saveNote(note), 1500);
      return () => clearTimeout(timer.current);
    }
  }, [note]);

  function handleTyping(evt) {
    if (!autoSave.current) autoSave.current = true;
    setNote({ ...note, [evt.target.name]: evt.target.value });
  }

  return (
    <main className='NoteDetailPage main-container'>
      <input className='note-title' name="title" onChange={handleTyping} value={note.title} />
      <p className='note-last-modified'>{note.lastModified}</p>
      <textarea className='note-field' value={note.markdown_text} name="markdown_text" onChange={handleTyping} placeholder='Note field...' ></textarea>
      <PopupDrawer page={'note'} user={user} note={note} />
    </main>
  )
}