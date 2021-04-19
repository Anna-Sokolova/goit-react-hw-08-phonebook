import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');

const addContactRequest = createAction('contacts/AddRequest');
const addContactSuccess = createAction('contacts/AddSuccess');
const addContactError = createAction('contacts/AddError');

const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');

const changeFilter = createAction('contacts/changeFilter');

export default {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};
