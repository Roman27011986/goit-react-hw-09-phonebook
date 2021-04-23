import React from 'react';
import GetName from '../GetName'
import GetNumber from '../GetNumber'
import styles from './Form.module.css'
import {addContact} from '../../redux/contacts/contacts-operations'
import { connect } from 'react-redux'
import {getAllContacts} from '../../redux/contacts/contacts-selectors'

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
        
    }
    handleChange = (event) => {
        const {name,value} = event.currentTarget
        this.setState({[name]:value})
       
      }
    handleSubmit = (event) => {
        event.preventDefault()
        const validName = this.props.contacts.find(contact => (
            contact.name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase()
          ))
         validName ? alert(`${this.state.name} is already in contacts`) : this.props.onSubmit(this.state)
        
        this.reset()
        
    }

    
    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {
       
        
        return (
            
        <form className={styles.form}  action="" onSubmit={this.handleSubmit}>
            <GetName  handleChange={this.handleChange} value={this.state.name }/>
                <GetNumber handleChange={this.handleChange} value={this.state.number} />
                
                <button className={styles.btn} type="submit" disabled={!this.state.name || !this.state.number}>Add contact</button>
                
        </form>
         
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: getAllContacts(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({ name, number }) => dispatch(addContact(name, number))
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);