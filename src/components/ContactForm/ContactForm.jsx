import React from 'react';
import GetName from '../GetName'
import GetNumber from '../GetNumber'
import styles from './Form.module.css'

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
        this.props.onSubmit(this.state)
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
export default ContactForm