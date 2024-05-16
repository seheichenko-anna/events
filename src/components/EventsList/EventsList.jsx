import { useSelector } from 'react-redux';
import { selectEvents } from '../../redux/eventsSlice';
import EventsItem from './EventsItem/EventsItem';

const EventsList = () => {
  const events = useSelector(selectEvents);

  return (
    <ul>
      {events.map(({ _id, title, event_date, organizer }) => (
        <EventsItem
          key={_id}
          title={title}
          event_date={event_date}
          organizer={organizer}
        />
      ))}
    </ul>
  );
};

export default EventsList;
