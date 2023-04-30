import classes from "./Styles/EventsItem.module.css"

const EventsItem = (props) => {
  const eventDescription = props.description;
  const eventDetails = props.details;
  const eventDuration = props.duration;
  const eventTime = props.time;

  return (
    <div>
      <h2>Event: {eventDescription}</h2>
      <p>Event's duration: {eventDuration}</p>
    </div>
  );
};

export default EventsItem;
