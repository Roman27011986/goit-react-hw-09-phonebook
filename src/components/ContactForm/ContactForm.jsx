import React from 'react';
import GetName from '../GetName'
import GetNumber from '../GetNumber'
import styles from './Form.module.css'
import contactActions from '../../redux/contacts/contacts-action'
import {connect} from 'react-redux'

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

const mapStateToProps = ({ contacts: { items } }) => ({
    contacts: items
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit:({name,number})=>dispatch(contactActions.addContact(name,number))
});
export default connect(mapStateToProps,mapDispatchToProps)(ContactForm) 