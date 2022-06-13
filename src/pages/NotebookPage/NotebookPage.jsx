import { useState, useEffect } from 'react';
import * as notebooksAPI from '../../utilities/notebooks-api';
import NotebooksList from '../../components/NotebooksList/NotebookList';
import PopupDrawer from '../../components/PopupDrawer/PopupDrawer';
import NewNotebookForm from '../../components/NewNotebookForm/NewNotebookForm';
export default function NotebookPage({ user }) {
  const [notebooks, setNotebooks] = useState([]);
  const [isNewNotebookFormActive, setIsNewNotebookFormActive] = useState(false);

  useEffect(() => {
    const getNotebooks = async () => {
      const notebooks = await notebooksAPI.getNotebooks();
      setNotebooks(notebooks);
    }

    getNotebooks();
  }, []);

  return (
    <main className="main-container">
      <h1 className='header'>Notebooks</h1>
      <NotebooksList notebooks={notebooks} user={user} />
      <PopupDrawer page={'notebooks'} user={user} isNewNotebookFormActive={isNewNotebookFormActive} setIsNewNotebookFormActive={setIsNewNotebookFormActive} />
      <NewNotebookForm setNotebooks={setNotebooks} isNewNotebookFormActive={isNewNotebookFormActive} setIsNewNotebookFormActive={setIsNewNotebookFormActive} />
    </main>
  );
}