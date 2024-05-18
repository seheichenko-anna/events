import { useForm } from 'react-hook-form';
import s from './RegistrationForm.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addParticipantThunk } from '../../redux/operations';
import { registrationSchema } from '../../schemas/validationForm';
import { joiResolver } from '@hookform/resolvers/joi';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registrationSchema),
  });

  const onSubmit = data => {
    dispatch(addParticipantThunk({ data, id }));
    reset();
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className={s.form_wrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form_container}>
          <h2 className={s.form_title}>Event registration</h2>
          <div className={s.input_wrapper}>
            <label>Full name</label>
            <input
              {...register('full_name', { required: true })}
              type="text"
              className={s.input}
            />
            {errors.full_name && (
              <span className={s.error}>{errors.full_name.message}</span>
            )}
          </div>
          <div className={s.input_wrapper}>
            <label>Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              autoComplete="email"
              className={s.input}
            />
            {errors.email && (
              <span className={s.error}>{errors.email.message}</span>
            )}
          </div>
          <div className={s.input_wrapper}>
            <label>Date of birth</label>
            <input
              {...register('date_of_birth', { required: true })}
              type="date"
              autoComplete="date"
              className={s.input}
            />
            {errors.date_of_birth && (
              <span className={s.error}>{errors.date_of_birth.message}</span>
            )}
          </div>

          <div className={s.radio_inputs_wrapper}>
            <p>Where did you hear about this event?</p>
            <div className={s.radio_inputs_container}>
              <div className={s.radio_input}>
                <input
                  {...register('event_source', { required: true })}
                  type="radio"
                  value="social media"
                />
                <label>Social media</label>
              </div>
              <div className={s.radio_input}>
                <input
                  {...register('event_source', { required: true })}
                  type="radio"
                  value="friends"
                />
                <label>Friends</label>
              </div>
              <div className={s.radio_input}>
                <input
                  {...register('event_source', { required: true })}
                  type="radio"
                  value="found myself"
                />
                <label>Found myself</label>
              </div>
              {errors.event_source && (
                <span className={s.error}>{errors.event_source.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className={s.btn_wrapper}>
          <button type="button" className={s.btn_cancel} onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className={s.btn_save}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
