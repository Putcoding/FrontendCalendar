import axios from "axios";
import { useLoaderData } from "react-router-dom";

import classes from "./Styles/PlannerItem.module.css";
import EventsList from "./EventsList";
import NotesList from "./NotesList";
import TodosList from "./TodosList";

const PlannerItem = (props) => {
  const data = useLoaderData();

  console.log(data);

  const currentDate = props.currentDate;
  const dayOffset = props.offset;

  let componentDate = new Date();
  componentDate.setDate(currentDate.getDate() + dayOffset);

  return (
    <div className={classes["planner-item"]}>
      <h2>{props.day}</h2>
      <p>({componentDate.toDateString()})</p>
      {data.events ? (
        <EventsList events={data.events} />
      ) : (
        <p>Loading events...</p>
      )}
      {data.notes ? <NotesList notes={data.notes} /> : <p>Loading notes...</p>}
      {data.todos ? <TodosList todos={data.todos} /> : <p>Loading todos...</p>}
    </div>
  );
};

export default PlannerItem;

export async function loader() {
  const eventsURL = "http://localhost:8080/events/user:1";
  const notesURL = "http://localhost:8080/notes/user:1";
  const todosURL = "http://localhost:8080/todoos/user:1";

  const getEvents = axios.get(eventsURL);
  const getNotes = axios.get(notesURL);
  const getTodos = axios.get(todosURL);

  let result = {};

  const response = await Promise.all([getEvents, getNotes, getTodos]);
  result = {
    events: response[0].data,
    notes: response[1].data,
    todos: response[2].data,
  };

  return result;
}
