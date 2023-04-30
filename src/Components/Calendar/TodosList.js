import TodosItem from "./TodosItem";
import classes from "./Styles/TodosList.module.css"

const TodosList = (props) => {
  const todos = props.todos;
  return (
    <>
      <h3>Todos</h3>
      <div className={classes["add-todo-text"]}>+ Add todo</div>
      <ol>
        {todos.map((todo) => (
          <TodosItem isDone={todo.done} text={todo.text} key={Math.random()} />
        ))}
      </ol>
    </>
  );
};

export default TodosList;
