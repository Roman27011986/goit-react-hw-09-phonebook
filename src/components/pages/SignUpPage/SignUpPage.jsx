import React from 'react';
import { connect } from 'react-redux';
import { userSignUp } from '../../../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './SignUp.module.css'

class SignUpPage extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({ [name]: value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSignUp(this.state);
        this.setState({ name: '', email: '', password: '', })
    };

    render() {

        const { name, email, password } = this.state;

        return (

            <form className={styles.signForm}  onSubmit={this.handleSubmit} >

                <TextField
                    name="name"
                    type="text"
                    placeholder="Name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    required value={name}
                    onChange={this.handleChange} />
                
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
                    type="submit">
                    Sign In
                    </Button>
                
            </form>
        )
    }
};

// const mapStateToProps = (state) => ({
//     contacts: getVisibleContact(state)
// });
    
const mapDispatchToProps ={
    onSignUp: userSignUp,
};
 
export default connect(null, mapDispatchToProps)(SignUpPage);