import { useDispatch, useSelector } from 'react-redux';
import EventsList from '../../components/EventsList/EventsList';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchEventsThunk, fetchMoreEventsThunk } from '../../redux/operations';
import s from './Events.module.css';
import SortSelect from '../../components/SortSelect/SortSelect';
import { selectHasMore, selectPage } from '../../redux/eventsSlice';

const Events = () => {
  const [sortBy, setSortBy] = useState('title');
  const [order, setOrder] = useState('asc');

  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();
  const observer = useRef();

  useEffect(() => {
    dispatch(fetchEventsThunk({ sortBy, order, page: 1 }));
  }, [dispatch, sortBy, order]);

  const lastEventElementRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(fetchMoreEventsThunk({ sortBy, order, page: page + 1 }));
        }
      });
      if (node) observer.current.observe(node);
    },
    [dispatch, hasMore, order, page, sortBy]
  );

  return (
    <section className={s.events_section}>
      <h1 className={s.title}>Events</h1>
      <SortSelect
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      />
      <EventsList lastEventElementRef={lastEventElementRef} />
    </section>
  );
};

export default Events;
