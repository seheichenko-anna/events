import { useSelector } from 'react-redux';

import { selectIsLoading, selectParticipants } from '../../redux/eventsSlice';
import ParticipantsItem from './Participantsitem/ParticipantsItem';
import s from './ParticipantsList.module.css';
import { ThreeDots } from 'react-loader-spinner';

const ParticipantsList = () => {
  const participants = useSelector(selectParticipants);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return (
      <div className={s.spinner_wrapper}>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#03AED2"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return participants.length > 0 && !isLoading ? (
    <ul className={s.participants_list}>
      {participants.map(({ full_name, email, _id }) => (
        <ParticipantsItem key={_id} fullName={full_name} email={email} />
      ))}
    </ul>
  ) : (
    <div className={s.no_participants}>No participants 😔</div>
  );
};

export default ParticipantsList;
