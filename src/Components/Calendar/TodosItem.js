const TodosItem = (props) => {
  const todoIsDone = props.isDone;
  const todoText = props.text;
  return (
    <div>
      <h2>Todo title: {todoText}</h2>
      {todoIsDone ? <p>DONE</p> : <p>TO BE DONE</p>}
    </div>
  );
};

export default TodosItem;
