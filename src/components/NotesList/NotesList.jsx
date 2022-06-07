import Note from "../Note/Note";
export default function NotesList({ notes, user }) {
  const notesList = notes.map((note) => <Note key={note._id} note={note} user={user}/> );
  return (
    <section>
      {notesList}
    </section>
  );
}