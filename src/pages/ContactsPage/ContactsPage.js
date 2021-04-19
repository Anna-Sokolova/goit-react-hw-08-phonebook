import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import operationContacts from '../../redux/contacts/contacts-operations';
import selectorsContacts from '../../redux/contacts/contacts-selectors';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }

  render() {
    return (
      <Container>
        <Title title="Phonebook" />
        <ContactForm />
        <Filter />
        <Title title="Contacts" />
        <ContactList />
        {this.props.isloadingContacts && <Spinner />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isloadingContacts: selectorsContacts.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllContacts: () => dispatch(operationContacts.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
