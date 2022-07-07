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
          <li className='menu-item' onClick={handlePreview}>
            <MarkdownPreviewIcon />
            <p className='icon-text'>Preview</p>
          </li>
          <li className='menu-item' onClick={handleDelete}>
            <DeleteNoteIcon />
            <p className='icon-text'>Delete</p>
          </li>
          <li className='menu-item' onClick={handleAddToNotebook}>
            <AddNotebookIcon />
            <p className='icon-text'>Notebook</p>
          </li>
          <li className='menu-item' onClick={handleNewNote}>
            <AddNoteIcon />
            <p className='icon-text'>New Note</p>
          </li>
        </>
      );
    }
    if (page === 'notes') {
      return (
        <>
          <li className='menu-item' onClick={handleNewNote}>
            <AddNoteIcon />
            <p className='icon-text'>New Note</p>
          </li>
        </>
      );
    }
    if (page === 'notebooks') {
      return (
        <>
          <li className='menu-item' onClick={handleNewNotebook}>
            <AddNotebookIcon />
            <p className='icon-text'>New Notebook</p>
          </li>
        </>
      );
    }
    if (page === 'notebook') {
      return (
        <>
          <li className='menu-item' onClick={handleNewNotebook}>
            <AddNotebookIcon />
            <p className='icon-text'>New Notebook</p>
          </li>
        </>
      );
    }
    if (page === 'demo') {
      return (
        <>
          <li className='menu-item' onClick={handlePreview}>
            <MarkdownPreviewIcon />
            <p className='icon-text'>Preview</p>
          </li>
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