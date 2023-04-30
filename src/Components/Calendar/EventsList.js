import EventsItem from "./EventsItem";
import classes from "./Styles/EventsList.module.css";

const EventsList = (props) => {
  const events = props.events;
  return (
    <>
      <h3>Events</h3>
      <div className={classes["add-event-text"]}>+ Add event</div>
      <ol className={classes["events-list"]}>
        {events.map((event) => (
          <EventsItem
            description={event.description}
            details={event.details}
            duration={event.duration}
            time={event.time}
            key={Math.random()}
          />
        ))}
      </ol>
    </>
  );
};

export default EventsList;
