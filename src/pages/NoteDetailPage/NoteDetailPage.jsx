import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import './NoteDetailPage.css';

export default function NoteDetailPage() {
  const { noteId } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    async function getNote() {
      const note = await notesAPI.getNote(noteId);
      setNote(note);
    }
    getNote();
  }, []);

  function handleTyping(evt) {
    setNote({...note, [evt.target.name]: evt.target.value});
  }
  
  return (
    <main className='NoteDetailPage'>
      <h3 className='note-title'>{note.title}</h3>
      <p className='note-last-modified'>{note.lastModified}</p>
      <textarea className='note-field' value={note.markdown_text} name="markdown_text" onChange={handleTyping}></textarea>
    </main>
  )
}