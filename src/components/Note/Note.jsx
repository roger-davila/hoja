import './Note.css';
export default function Note({ note }) {
  return (
    <article className="Note">
      <h2>{note.title}</h2>
      <p>{note.markdown_text}</p>
      <p>{note.updatedAt}</p>
      <p>{note.notebook}</p>
    </article>
  )
}
