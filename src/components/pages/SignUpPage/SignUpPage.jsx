import React from 'react';
import { connect } from 'react-redux'
import {userSignUp} from '../../../redux/auth/auth-operations'

class SignUpPage extends React.Component {
    state = {
        name: '',
        email: '',
        password:'',
    }

    handleChange =(event)=>{
        const {name,value} = event.currentTarget
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSignUp(this.state);
        this.setState({ name: '',email: '',password:'',})
    }

    render() {

        const { name, email, password } = this.state;

        return (
            <form   action="" onSubmit={this.handleSubmit} >
                <label htmlFor="">
                    name
                    <input type="text" name="name"  value={name} onChange={this.handleChange }/>
                </label>
                <label htmlFor="">
                    email
                    <input type="email" name="email" value={email} onChange={this.handleChange }/>
                </label>
                <label htmlFor="">
                    password
                    <input type="password" name="password" value={password} onChange={this.handleChange }/>
                 </label>
                
                <button  type="submit">Sign In</button>
                
        </form>
        )
    }
}

// const mapStateToProps = (state) => ({
//     contacts: getVisibleContact(state)
// });
    
const mapDispatchToProps ={
    onSignUp: userSignUp,
};
 
export default connect(null,mapDispatchToProps)(SignUpPage)