import Notebook from "../Notebook/Notebook";
export default function NotebooksList({ notebooks, user }) {
  const notebooksList = notebooks.map((notebook) => <Notebook key={notebook._id} notebook={notebook} user={user} />);
  return (
    <section>
      {notebooksList}
    </section>
  );
}