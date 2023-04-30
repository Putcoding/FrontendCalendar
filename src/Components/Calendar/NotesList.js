import NoteItem from "./NoteItem";

const NotesList = (props) => {
  const notes = props.notes;
  return (
    <ol>
      {notes.map((note) => (
        <NoteItem title={note.title} text={note.text} key={Math.random()} />
      ))}
    </ol>
  );
};

export default NotesList;
