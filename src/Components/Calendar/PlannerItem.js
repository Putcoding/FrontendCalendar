import axios from "axios";
import { useLoaderData } from "react-router-dom";

import classes from "./Styles/PlannerItem.module.css";
import EventsList from "./EventsList";
import NotesList from "./NotesList";
import TodosList from "./TodosList";
import { useContext, useEffect, useState } from "react";
import DateContext from "../../store/date";

const PlannerItem = (props) => {
  const dateContext = useContext(DateContext);
  const dateToUse = dateContext.date;

  const currentDate = props.currentDate;
  const dayOffset = props.offset;

  let componentDate = new Date(dateToUse);
  componentDate.setDate(currentDate.getDate() + dayOffset);

  const dateURL = componentDate.toLocaleDateString("pl-PL");
  const [data, setData] = useState({ events: "", notes: "", todos: "" });

  useEffect(() => {
    const fetchData = async () => {
      const eventsURL = "http://localhost:8080/events/user:1/date:" + dateURL;
      const notesURL = "http://localhost:8080/notes/user:1";
      const todosURL = "http://localhost:8080/todoos/user:1/date:" + dateURL;

      const getEvents = axios.get(eventsURL);
      const getNotes = axios.get(notesURL);
      const getTodos = axios.get(todosURL);

      const response = await Promise.all([getEvents, getNotes, getTodos]);
      let result = {};

      result = {
        events: response[0].data,
        notes: response[1].data,
        todos: response[2].data,
      };
      
      if (result) {
        setData(result);
      }
    };

    fetchData().catch(console.error);
  }, [dateURL]);

  return (
    <div className={classes["planner-item"]}>
      <h2 className={classes.day}>{props.day}</h2>
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
