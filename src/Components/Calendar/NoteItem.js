import classes from "./Styles/NoteItem.module.css"

const NoteItem = (props) => {
  const noteTitle = props.title;
  const noteText = props.text;

  return (
    <div className={classes["single-note"]}>
      <h2 className={classes["note-title"]}>title: <span>{noteTitle}</span></h2>
      <hr></hr>
      <p>{noteText}</p>
    </div>
  );
};

export default NoteItem;
