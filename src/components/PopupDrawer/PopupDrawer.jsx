import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import * as notebooksAPI from '../../utilities/notebooks-api';
import { MarkdownPreviewIcon, DeleteNoteIcon, AddNoteIcon, AddTagIcon, MenuIcon, AddNotebookIcon } from '../HojaIcons/HojaIcons';
import './PopupDrawer.css'

export default function PopupDrawer({ page, user, note, setIsMarkdown, setNotebookListVisible, setIsNewNotebookFormActive }) {
  const navigate = useNavigate();
  const popupDrawer = useRef(null);
  const [isActive, setIsActive] = useState(false);

  async function handleMenuClick() {
    setIsActive(!isActive);
  }

  async function handleNewNote() {
    const newNote = await notesAPI.createNote();
    navigate(`/${user.name}/notes/${newNote._id}`);
  }

  async function handleDelete() {
    const deletedNote = await notesAPI.deleteNote(note._id);
    navigate(`/${user.name}/notes`);
  }

  async function handleAddToNotebook() {
    setIsActive(!isActive);
    setNotebookListVisible(true);
  }

  async function handleNewNotebook() {
    setIsActive(!isActive);
    setIsNewNotebookFormActive(true);
  }

  function handlePreview() {
    setIsMarkdown((isMarkdown) => !isMarkdown);
  }

  function chooseMenuItems() {
    if (page === 'note') {
      return (
        <>
          <li onClick={handlePreview}><MarkdownPreviewIcon /></li>
          <li onClick={handleDelete}><DeleteNoteIcon /></li>
          <li onClick={handleAddToNotebook}><AddNotebookIcon /></li>
          <li><AddNoteIcon /></li>
          <li><AddTagIcon /></li>
        </>
      );
    }
    if (page === 'notes') {
      return (
        <>
          <li onClick={handleNewNote}><AddNoteIcon /></li>
          <li><DeleteNoteIcon /></li>
        </>
      );
    }
    if (page === 'notebooks') {
      return (
        <>
          <li onClick={handleNewNotebook}><AddNotebookIcon /></li>
        </>
      );
    }
    if (page === 'notebook') {
      return (
        <>
          <li onClick={handleNewNotebook}><AddNotebookIcon /></li>
        </>
      );
    }
  }
  return (
    <div className="PopupDrawer-container">
      <ul ref={popupDrawer} className={`PopupDrawer ${isActive ? 'active' : 'inactive'}`}>
        {chooseMenuItems()}
      </ul>
      <button className={`PopupDrawer-button ${isActive ? 'active' : 'inactive'}`} onClick={handleMenuClick}>
        <MenuIcon />
      </button>
    </div>
  );
}