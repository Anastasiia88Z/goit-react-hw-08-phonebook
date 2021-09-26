import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange, onBlur }) => {
  return (
    <label htmlFor={'lab'} className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        id={'lab'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
