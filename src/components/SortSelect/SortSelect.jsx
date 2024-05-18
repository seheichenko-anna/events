import s from './SortSelect.module.css';

const SortSelect = ({ sortBy, setSortBy, order, setOrder }) => {
  const handleSort = event => {
    setSortBy(event.target.value);
  };

  const toggleOrder = () => {
    setOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className={s.sort_wrapper}>
      <label className={s.select_wrapper}>
        Sort by:
        <select value={sortBy} onChange={handleSort}>
          <option value="title">Title</option>
          <option value="event_date">Event Date</option>
          <option value="organizer">Organizer</option>
        </select>
      </label>
      <button onClick={toggleOrder} className={s.order_btn}>
        {order === 'asc' ? '▲' : '▼'}
      </button>
    </div>
  );
};

export default SortSelect;
