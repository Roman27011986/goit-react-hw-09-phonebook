import React from 'react';
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Container from './Container'
import Filter from './Filter'
import { connect } from 'react-redux'
import { fetchContact } from '../redux/contacts/contacts-operations'
import Loader from "react-loader-spinner";
import {getLoading} from '../redux/contacts/contacts-selectors'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchContacts()
  }
  
  render() {
   
    return (
      
      <Container>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm  />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoading && <Loader
                type="Rings"
                color="blue"
                height={100}
                width={100}
            />}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  fetchContacts:()=>dispatch(fetchContact())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
