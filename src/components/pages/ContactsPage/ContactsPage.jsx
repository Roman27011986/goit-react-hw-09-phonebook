import React from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../ContactForm';
// import TemporaryDrawer from '../../../components/TemporaryDrawer/TemporaryDrawer'
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
            
            <ContactForm />
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
    };

};
const mapStateToProps = state => ({
    isLoading: getLoading(state)
});
const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContact())
});

export default connect(mapStateToProps,mapDispatchToProps)(ContactsPage);