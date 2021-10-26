import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from '../service/contacts-api';

export const fetchContactsAction = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    const contacts = await contactApi.fetchContacts();
    return contacts;
  },
);

export const addContactsAction = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const data = await contactApi.addContacts(contact);
    return data;
  },
);

export const deleteContactsAction = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    await contactApi.deleteContacts(id);
    return id;
  },
);
