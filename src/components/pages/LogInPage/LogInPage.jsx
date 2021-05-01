import React from 'react';
import { connect } from 'react-redux';
import { userLogIn } from '../../../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './Login.module.css';

 class LogInPage extends React.Component {
    state = {
        email: '',
        password:'',
    }

    handleChange =(event)=>{
        const {name,value} = event.currentTarget
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSignUp(this.state)
        this.setState({email: '',password:'',})
    }

    render() {
        const {email, password} = this.state;
        return (
            <form className={styles.loginForm} onSubmit={this.handleSubmit} >

                <TextField
                    name="email"
                    type="email"
                    placeholder="email"
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    required value={email}
                    onChange={this.handleChange} />

                
                 <TextField
                    id="outlined-password-input"
                    name="password"
                    type="password"
                    placeholder="password"
                    label="password"
                    variant="outlined"
                    autoComplete="current-password"
                    required value={password}
                    onChange={this.handleChange} />
                
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"  >
                    Log In
                    </Button>
                
            </form>
        );
     };
};

    
const mapDispatchToProps ={
    onSignUp: userLogIn,
};
 
export default connect(null, mapDispatchToProps)(LogInPage);