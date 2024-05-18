import { useForm } from 'react-hook-form';
import s from './Search.module.css';
import { useDispatch } from 'react-redux';
import { fetchParticipantsThunk } from '../../redux/operations';

const Search = ({ id }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ search }) => {
    dispatch(fetchParticipantsThunk({ id, search }));
  };

  const onChange = search => {
    dispatch(fetchParticipantsThunk({ id, search }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.search_form}>
      <input
        type="text"
        {...register('search', {
          required: true,
          onChange: e => onChange(e.target.value),
        })}
        className={s.search_input}
      />
      <button className={s.search_btn}>Search</button>
    </form>
  );
};

export default Search;
