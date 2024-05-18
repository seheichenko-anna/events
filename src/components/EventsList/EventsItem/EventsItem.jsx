import { Link } from 'react-router-dom';
import s from './EventsItem.module.css';

const EventsItem = ({
  title,
  event_date,
  organizer,
  description,
  id,
  lastEventElementRef,
}) => {
  return (
    <li className={s.card} ref={lastEventElementRef}>
      <div className={s.top_card}>
        <h2 className={s.card_title}>{title}</h2>
        <p>{event_date}</p>
      </div>
      <p>{description}</p>
      <p>Organizer: {organizer}</p>
      <div className={s.links_wrapper}>
        <Link to={`${id}/registration`} className={s.link}>
          Register
        </Link>
        <Link to={`${id}/participants`} className={`${s.link} ${s.link_view}`}>
          View
        </Link>
      </div>
    </li>
  );
};

export default EventsItem;
