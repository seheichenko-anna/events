import { Link, useParams } from 'react-router-dom';
import ParticipantsList from '../../components/ParticipantsList/ParticipantsList';
import s from './Participants.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchParticipantsThunk, getEventThunk } from '../../redux/operations';
import Search from '../../components/Search/Search';
import { selectEvent } from '../../redux/eventsSlice';

const Participants = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { title } = useSelector(selectEvent);

  useEffect(() => {
    dispatch(fetchParticipantsThunk({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getEventThunk(id));
  }, [dispatch, id]);

  return (
    <>
      <Link to="/">⬅ Return to events page</Link>
      <section className={s.participants_section}>
        <h2 className={s.event_title}>{title} participants</h2>
        <Search id={id} />
        <ParticipantsList />
      </section>
    </>
  );
};

export default Participants;
