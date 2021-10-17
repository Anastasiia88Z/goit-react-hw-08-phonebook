import { changeFilter } from '../../redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    dispatch(changeFilter(e.target.value));
  };

  const onBlurHandler = () => {
    dispatch(changeFilter(''));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    </label>
  );
}
