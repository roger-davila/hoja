import { useState } from 'react';
import * as notebooksAPI from '../../utilities/notebooks-api';
import './NewNotebookForm.css';
export default function NewNotebookForm({ setNotebooks, isNewNotebookFormActive, setIsNewNotebookFormActive }) {
  const [notebook, setNotebook] = useState('');

  function handleChange(evt) {
    setNotebook(evt.target.value);
  }

  function handleCancel() {
    setIsNewNotebookFormActive(!isNewNotebookFormActive);
  }

  async function handleFormSubmit(evt) {
    evt.preventDefault();
    setIsNewNotebookFormActive(!isNewNotebookFormActive);
    let newNotebook = await notebooksAPI.createNotebook(notebook);
    setNotebook('');
    setNotebooks(notebooks => [...notebooks, newNotebook]);
  }

  return (
    <div className={`NewNotebookForm-container ${isNewNotebookFormActive ? 'Active' : ''}`}>
      <form onSubmit={handleFormSubmit} className='NewNotebookForm' >
        <div className='auth-input-container'>
          <label>New Notebook Name</label>
          <input className='auth-input' onChange={handleChange} value={notebook} type="text" name="notebook" required />
        </div>
        <button type="submit" className='menu-option'>Add Notebook</button>
        <p onClick={handleCancel} className='menu-option'>Cancel</p>
      </form>
    </div>
  )
}