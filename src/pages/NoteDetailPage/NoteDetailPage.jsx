import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import './NoteDetailPage.css';

export default function NoteDetailPage() {
  const { noteId } = useParams();
  const [note, setNote] = useState({});
  const timer = useRef();

  useEffect(() => {
    async function getNote() {
      const note = await notesAPI.getNote(noteId);
      setNote(note);
    }
    getNote();
  }, []);

  useEffect(() => {
    timer.current = setTimeout(() => notesAPI.saveNote(note), 1500);
    return () => clearTimeout(timer.current);
  }, [note]);

  function handleTyping(evt) {
    setNote({...note, [evt.target.name]: evt.target.value});
  }
  
  return (
    <main className='NoteDetailPage main-container'>
      <h3 className='note-title'>{note.title}</h3>
      <p className='note-last-modified'>{note.lastModified}</p>
      <textarea className='note-field' value={note.markdown_text} name="markdown_text" onChange={handleTyping} placeholder='Note field...' ></textarea>
    </main>
  )
}