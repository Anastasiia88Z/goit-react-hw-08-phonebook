import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/addContact', data => {
  return {
    payload: {
      id: uuidv4(),
      ...data,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('contacts/changeFilter');
