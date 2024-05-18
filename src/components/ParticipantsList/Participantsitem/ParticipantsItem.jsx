import s from './ParticipantsItem.module.css';

const ParticipantsItem = ({ fullName, email }) => {
  return (
    <li className={s.participant}>
      <p>{fullName}</p>
      <p>{email}</p>
    </li>
  );
};

export default ParticipantsItem;
