import NoteItem from "./NoteItem";
import classes from "./Styles/NotesList.module.css"

const NotesList = (props) => {
  const notes = props.notes;
  return (
    <>
    <h3>Notes</h3>
    <div className={classes["add-note-text"]}>+ Add note</div>
    <ol>
      {notes.map((note) => (
        <NoteItem title={note.title} text={note.text} key={Math.random()} />
        ))}
    </ol>
        </>
  );
};

export default NotesList;
