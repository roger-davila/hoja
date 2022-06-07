import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
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
  return (
    <>
      <h3>{note.title}</h3>
      <p className=''>{note.lastModified}</p>
      <textarea defaultValue={note.markdown_text}>
      </textarea>
    </>
  )
}