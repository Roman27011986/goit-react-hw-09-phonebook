import React,{useState} from 'react';
import {  useDispatch } from 'react-redux';
import { userSignUp } from '../../../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './SignUp.module.css'

export default function SignUpPage() {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleChange = (event) => {
        const { name, value } = event.target;
         switch (name) {
             case 'name':
             setName(value)
                   break;
                   case 'email':
             setEmail(value)
                   break;
                   case 'password':
             setPassword(value)
                   break;
             default:
                 console.log('error from SignUpPage');;
         };
       
    };

    const dispatch = useDispatch()

   const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userSignUp({name,email,password}));
        reset();
    };

    const reset = () => {
      setName('')
      setEmail('')
      setPassword('')
  };

        return (

            <form className={styles.signForm}  onSubmit={handleSubmit} >

                <TextField
                    name="name"
                    type="text"
                    placeholder="Name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    required value={name}
                    onChange={handleChange} />
                
                <TextField
                    name="email"
                    type="email"
                    placeholder="email"
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    required value={email}
                    onChange={handleChange} />
                
                <TextField
                    id="outlined-password-input"
                    name="password"
                    type="password"
                    placeholder="password"
                    label="password"
                    variant="outlined"
                    autoComplete="current-password"
                    required value={password}
                    onChange={handleChange} />

                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Sign In
                    </Button>
                
            </form>
        )
    
};

