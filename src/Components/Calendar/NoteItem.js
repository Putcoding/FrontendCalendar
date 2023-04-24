const NoteItem = (props) => {
  const noteTitle = props.title;
  const noteText = props.text;

  return (
    <div>
      <h2>Note title: {noteTitle}</h2>
      <p>Note content: {noteText}</p>
    </div>
  );
};

export default NoteItem;
