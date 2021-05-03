import React from 'react';
import style from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';

import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Tooltip from '@material-ui/core/Tooltip';
import { red } from '@material-ui/core/colors';





class ContactForm extends React.Component {

  state = {
    name: '',
    number: '',
    anchorEl: null
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
       
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const validName = this.props.contacts.find(contact => (
      contact.name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase()
    ));
      
    validName ? alert(`${this.state.name} is already in contacts`) : this.props.onSubmit(this.state)
    this.handleClose();
    this.reset()
  };
   
     handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };
  
    handleClose = () => {
      this.setState({anchorEl:null});
    };
    
  reset = () => {
        
    this.setState({ name: '', number: '' });
  };

    render() {
       
      const { anchorEl } = this.state;
      
      return (
        <>
          <Tooltip title="AddContact">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClick}>
              <PersonAddIcon fontSize="large" color="primary" />
            </Button>
          </Tooltip>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
              
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
              padding:'0',
                
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
              padding:'0',
            }}>
            
            <form
              className={style.form}
              onSubmit={this.handleSubmit}>
              
              <TextField
                className={style.MuiOutlinedInputoot}
                label="Name"
                name="name"
                variant="outlined"
                type="text"
                color='primary'
                placeholder="Jacob Mercer"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
                value={this.state.name}
              />
                    
              <TextField
                className={style.MuiOutlinedInputoot}
                label="number"
                name="number"
                variant="outlined"
                placeholder="0970521180"
                type="tel"
                required
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                onChange={this.handleChange}
                value={this.state.number} />
                
              <button className={style.btn} type="submit" disabled={!this.state.name || !this.state.number}>Add contact</button>
                
            </form>

          </Menu>
            
        </>
        
      );
  };
};

const mapStateToProps = (state) => ({
    contacts: getAllContacts(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({ name, number }) => dispatch(addContact(name, number))
});


export default  connect(mapStateToProps, mapDispatchToProps)(ContactForm);