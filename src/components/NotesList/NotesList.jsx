import Note from "../Note/Note";
export default function NotesList({ notes }) {
  const notesList = notes.map((note) => <Note key={note._id} note={note} />);
  return (
    <section>
      {notesList}
    </section>
  );
}