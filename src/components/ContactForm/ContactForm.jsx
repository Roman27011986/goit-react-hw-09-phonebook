import React,{useState} from 'react';
import style from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { useSelector,useDispatch } from 'react-redux'

import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import TextField from '@material-ui/core/TextField';

import Button from "@material-ui/core/Button";
import Menu from '@material-ui/core/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Tooltip from '@material-ui/core/Tooltip';


export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    const {name,value} = event.target;
    switch (name) {
      case 'name':
        setName( value)
        break;
        case 'number':
        setNumber( value)
        break;
      default:
        console.log('switch ContactForm error!');
    }
   };


  const contacts = useSelector(state => getAllContacts(state));
  
  const dispatch = useDispatch();

 const handleSubmit = (event) => {
    event.preventDefault()
    const validName = contacts.find(contact => (
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    ));
      
    validName ? alert(`${name} is already in contacts`) : dispatch(addContact(name, number))
    handleClose();
    reset()
  };
   
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
   const handleClose = () => {
    setAnchorEl(null);
    };
    
    const reset = () => {
      setName('')
      setNumber('')
  };

      return (
        <>
          <Tooltip title="AddContact">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <PersonAddIcon fontSize="large" color="primary" />
            </Button>
          </Tooltip>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
              
                
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
              
            }}>
            
            <form
              className={style.form}
               onSubmit={handleSubmit}
            >
              
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
                onChange={handleChange}
                value={name}
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
                onChange={handleChange}
                value={number} />
                
              <button className={style.btn} type="submit" disabled={!name || !number}>Add contact</button>
                
            </form>

          </Menu>
            
        </>
        
      );
};
