import { useState, useEffect } from 'react';
import * as notebooksAPI from '../../utilities/notebooks-api';
import NotebooksList from '../../components/NotebooksList/NotebookList';
export default function NotebookPage({ user }) {
  const [notebooks, setNotebooks] = useState([]);

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
    </main>
  );
}