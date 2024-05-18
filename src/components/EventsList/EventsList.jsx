import { useSelector } from 'react-redux';
import { selectEvents } from '../../redux/eventsSlice';
import EventsItem from './EventsItem/EventsItem';
import s from './EventsList.module.css';

const EventsList = ({ lastEventElementRef }) => {
  const events = useSelector(selectEvents);

  return (
    <>
      <ul className={s.events_list}>
        {events.map((event, index) => {
          if (events.length === index + 1) {
            return (
              <EventsItem
                key={event._id}
                id={event._id}
                title={event.title}
                event_date={event.event_date}
                organizer={event.organizer}
                description={event.description}
                lastEventElementRef={lastEventElementRef}
              />
            );
          } else {
            return (
              <EventsItem
                key={event._id}
                id={event._id}
                title={event.title}
                event_date={event.event_date}
                organizer={event.organizer}
                description={event.description}
              />
            );
          }
        })}
      </ul>
    </>
  );
};

export default EventsList;
