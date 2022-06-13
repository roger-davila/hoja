import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as notebooksAPI from '../../utilities/notebooks-api';
import NotesList from '../../components/NotesList/NotesList';
import PopupDrawer from '../../components/PopupDrawer/PopupDrawer';

export default function NotebookDetailPage({ user }) {
  const { notebookId } = useParams();
  const [notebook, setNotebook] = useState({});
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getFromNotebook = async () => {
      let notes = await notebooksAPI.getFromNotebook(notebookId);
      setNotes(notes);
    }
    const getNotebook = async () => {
      let notebook = await notebooksAPI.getNotebook(notebookId);
      setNotebook({ ...notebook });
    }
    getFromNotebook();
    getNotebook();
  }, []);

  return (
    <main className="main-container">
      <h1 className='header'>{notebook?.name}</h1>
      <section className='notebook-notes'>
        {notes.length ? <NotesList notes={notes} user={user} /> : <p>No notes in this notebook</p>}
      </section>
      <PopupDrawer page={'notebook'} user={user} />
    </main>
  )
}