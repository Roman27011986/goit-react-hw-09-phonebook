import React from 'react';
import { connect } from 'react-redux';
import {userLogIn  } from '../../../redux/auth/auth-operations';

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
            <form   action="" onSubmit={this.handleSubmit} >
                <label htmlFor="">
                    email
                    <input type="email" value={email} name="email" onChange={this.handleChange }/>
                </label>
                <label htmlFor="">
                    password
                    <input type="password"  value={password} name="password" onChange={this.handleChange }/>
                 </label>
                
                <button  type="submit"  >Log In</button>
                
        </form>
        )
    }
}

    
const mapDispatchToProps ={
    onSignUp: userLogIn,
};
 
export default connect(null,mapDispatchToProps)(LogInPage)