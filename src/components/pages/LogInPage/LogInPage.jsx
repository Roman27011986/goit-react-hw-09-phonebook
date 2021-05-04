import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Login.module.css';

 export default function LogInPage() {
  
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');


   const handleChange =(event)=>{
        const {name,value} = event.target;
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case  'password':
             setPassword(value)
             break;
            default:
        console.log('error i LoginPage');;
        }
    };

    const dispatch = useDispatch();

   const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogIn({email,password}));
        reset();
    };

      const reset = () => {
      setEmail('');
      setPassword('');
  };

        return (
            <form className={styles.loginForm} onSubmit={handleSubmit} >

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
                    type="submit"  >
                    Log In
                    </Button>
                
            </form>
        );
     
};
