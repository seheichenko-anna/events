import { useDispatch } from 'react-redux';
import EventsList from '../components/EventsList/EventsList';
import { useEffect } from 'react';
import { fetchEventsThunk } from '../redux/operations';

const Events = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventsThunk());
  }, [dispatch]);

  return <EventsList />;
};

export default Events;
