import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, changeFilter } from './contacts-actions';
import initialContacts from '../data/initialContacts.json';

const items = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => {
    const isNameExist = state.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );

    const isNumberExist = state.find(
      contact => contact.number === payload.number,
    );

    const isDoupleItem = isNameExist || isNumberExist;
    if (isDoupleItem) {
      alert(`${isDoupleItem} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },

  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
