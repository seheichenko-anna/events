const EventsItem = ({ title, event_date, organizer }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{event_date}</p>
      <p>{organizer}</p>
    </li>
  );
};

export default EventsItem;
