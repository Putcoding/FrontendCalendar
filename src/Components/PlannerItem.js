import { useLoaderData } from "react-router-dom";
import classes from "./PlannerItem.module.css";
import axios from "axios";

const PlannerItem = (props) => {
  const todos = useLoaderData();

  const currentDate = props.currentDate;
  const dayOffset = props.offset;

  let componentDate = new Date();
  componentDate.setDate(currentDate.getDate() + dayOffset);

  return (
    <div className={classes["planner-item"]}>
      <h2>{props.day}</h2>
      <p>({componentDate.toDateString()})</p>
      {todos.map(todo => <p key={todo.todo_id}>{todo.text}</p>)}
    </div>
  );
};

export default PlannerItem;

export async function loader() {
  const response = await axios.get("http://localhost:8080/todoos/user:1");
  return response.data;
}
