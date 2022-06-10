import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as notesAPI from '../../utilities/notes-api';
import {MarkdownPreviewIcon, DeleteNoteIcon, AddNoteIcon, AddTagIcon, MenuIcon} from '../HojaIcons/HojaIcons';
import './PopupDrawer.css'

export default function PopupDrawer({ page, user, note }) {
  let navigate = useNavigate();
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

  function chooseMenuItems() {
    if (page === 'note') {
      return (
        <>
          {/* <li>Preview</li>
          <li>Delete</li>
          <li>Add to Notebook</li>
          <li>Add Tags</li> */}
          <li>
            <MarkdownPreviewIcon />
          </li>
          <li onClick={handleDelete}>
            <DeleteNoteIcon />
          </li>
          <li>
            <AddNoteIcon />
          </li>
          <li>
            <AddTagIcon />
          </li>
        </>
      );
    }
    if (page === 'notes') {
      return (
        <>
          {/* <li>New Note</li>
          <li>Delete</li> */}
          <li onClick={handleNewNote}>
            <AddNoteIcon />
          </li>
          <li>
            <DeleteNoteIcon />
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
        +
      </button>
    </div>
  );
}