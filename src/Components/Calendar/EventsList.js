import EventsItem from "./EventsItem";

const EventsList = (props) => {
  const events = props.events;
  return (
    <ol>
      {events.map((event) => (
        <EventsItem
          description={event.description}
          details={event.details}
          duration={event.duration}
          time={event.time}
        />
      ))}
    </ol>
  );
};

export default EventsList;
