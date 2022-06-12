import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import hljs from 'highlight.js';
import * as notesAPI from '../../utilities/notes-api';
import PopupDrawer from '../../components/PopupDrawer/PopupDrawer';
import MarkdownPreview from '../../components/MarkdownPreview/MarkdownPreview';
import './NoteDetailPage.css';

export default function NoteDetailPage({ user }) {
  const { noteId } = useParams();
  const [note, setNote] = useState({});
  const [isMarkdown, setIsMarkdown] = useState(false);
  const timer = useRef();
  const autoSave = useRef(false);

  useEffect(() => {
    async function getNote() {
      const note = await notesAPI.getNote(noteId);
      setNote(note);
    }
    getNote();
  }, []);

  useEffect(() => {
    if (autoSave.current) {
      timer.current = setTimeout(() => notesAPI.saveNote(note), 1500);
      return () => clearTimeout(timer.current);
    }
  }, [note]);

  function handleTyping(evt) {
    if (!autoSave.current) autoSave.current = true;
    setNote({ ...note, [evt.target.name]: evt.target.value });
  }

  function parseNote() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    // Checks if new notes has been typed on, otherwise the marked parser will fail if the input is not of a string type.
    const html = typeof note.markdown_text === 'string' ? marked.parse(note.markdown_text) : '';
    return <MarkdownPreview html={html} />
  }

  return (
    <main className='NoteDetailPage main-container'>
      <input className='note-title' name="title" onChange={handleTyping} value={note.title} />
      <p className='note-last-modified'>{note.lastModified}</p>
      {isMarkdown ? parseNote() : <textarea className='note-field' value={note.markdown_text} name="markdown_text" onChange={handleTyping} placeholder='Note field...' ></textarea>}
      <PopupDrawer page={'note'} user={user} note={note} setIsMarkdown={setIsMarkdown} />
    </main>
  )
}