import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contacts-actions';

//destructions
const {
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
} = contactActions;

const itemsReducer = createReducer([], {
  [fetchContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContactError]: (_, action) => console.log(action.payload),
  [addContactError]: (_, action) => console.log(action.payload),
  [deleteContactError]: (_, action) => console.log(action.payload),
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default contactsReducer;
