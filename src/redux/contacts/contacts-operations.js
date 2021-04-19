import axios from 'axios';
import contactActions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:5000';

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactActions.fetchContactSuccess(data)))
    .catch(error => dispatch(contactActions.fetchContactError(error)));
};

const addContact = data => dispatch => {
  const contact = {
    name: data.name,
    number: data.number,
  };

  dispatch(contactActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactActions.addContactSuccess(data)))
    .catch(error => dispatch(contactActions.addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(contactActions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactActions.deleteContactSuccess(contactId)))
    .catch(error => contactActions.deleteContactError(error));
};

export default { fetchContacts, addContact, deleteContact };
