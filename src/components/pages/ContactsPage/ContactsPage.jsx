import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../ContactForm';
import ContactList from '../../ContactList';
import Filter from '../../Filter';
import Loader from "react-loader-spinner";
import {getLoading} from '../../../redux/contacts/contacts-selectors'
import styles from './Container.module.css';
import { fetchContact } from '../../../redux/contacts/contacts-operations'

class ContactsPage extends React.Component  {

    componentDidMount() {
        this.props.fetchContacts()
      }
     
    render(){
        return (
            <div className={styles.container}>
            <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
            <ContactForm />
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter />
            <ContactList />
            {this.props.isLoading && <Loader
                type="Rings"
                color="blue"
                height={100}
                width={100}
            />}
        </div>
        )
   }

};
const mapStateToProps = state => ({
    isLoading: getLoading(state)
});
const mapDispatchToProps = dispatch => ({
    fetchContacts:()=>dispatch(fetchContact())
  })

export default connect(mapStateToProps,mapDispatchToProps)(ContactsPage);