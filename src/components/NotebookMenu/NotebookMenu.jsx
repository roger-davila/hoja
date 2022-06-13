import * as notesAPI from '../../utilities/notes-api';
import './NotebookMenu.css';
export default function NotebookMenu({ note, setNote, notebook, notebooks, notebookListVisible, setNotebookListVisible }) {
  const notebookOptions = notebooks.map((notebook) => <li className='menu-list-item' key={notebook._id} id={notebook._id} onClick={(evt) => handleNotebookClick(evt, note)}>{notebook.name}</li>);
  function handleCancel() {
    setNotebookListVisible(!notebookListVisible);
  }

  async function handleNotebookClick(evt, note) {
    const updatedNote = await notesAPI.saveNote({ ...note, notebook: evt.target.id });
    console.log(updatedNote);
    setNote({...updatedNote});
  }

  return (
    <article className={`NotebookMenu ${notebookListVisible ? 'Active' : ''}`} >
      <ul className='notebook-list'>
        {notebookOptions}
      </ul>
      {notebook ? <p className='menu-option' onClick={(evt) => handleNotebookClick(evt, note)}>Remove From {notebook}</p> : ''}
      <p className='menu-option' onClick={handleCancel}>Cancel</p>
    </article>
  )
}