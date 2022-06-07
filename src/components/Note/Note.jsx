import { Link } from 'react-router-dom';
import './Note.css';
export default function Note({ note, user }) {
  return (
    <Link className='note-link' to={`/${user.name}/notes/${note._id}`}>
      <article className="Note">
        <h3 className='note-title'>{note.title}</h3>
        <p className='note-text-preview'>{note.markdown_text}</p>
        <section className='note-details'>
          <p className='last-updated'>{note.lastModified}</p>
          <p className='notebook'>{note.notebook}</p>
        </section>
      </article>
    </Link>
  )
}
