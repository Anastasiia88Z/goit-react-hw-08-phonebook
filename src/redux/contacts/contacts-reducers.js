import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter } from './contacts-actions';
import {
  fetchContactsAction,
  addContactsAction,
  deleteContactsAction,
} from './contacts-operations';

const entities = createReducer([], {
  [fetchContactsAction.fulfilled]: (_state, action) => action.payload.data,
  [addContactsAction.fulfilled]: (state, { payload }) => [
    payload.data,
    ...state,
  ],
  [deleteContactsAction.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsAction.pending]: () => true,
  [fetchContactsAction.fulfilled]: () => false,
  [fetchContactsAction.rejected]: () => false,
  [deleteContactsAction.fulfilled]: () => false,
  [deleteContactsAction.pending]: () => true,
  [deleteContactsAction.rejected]: () => false,
  [addContactsAction.fulfilled]: () => false,
  [addContactsAction.pending]: () => true,
  [addContactsAction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsAction.rejected]: (_state, action) => action.payload,
  [fetchContactsAction.pending]: () => null,
  [addContactsAction.pending]: () => null,
  [addContactsAction.rejected]: (_state, action) => action.payload,
  [deleteContactsAction.pending]: () => null,
  [deleteContactsAction.rejected]: (_state, action) => action.payload,
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ entities, isLoading, error, filter });
