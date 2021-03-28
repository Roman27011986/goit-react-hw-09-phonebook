import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Container from './Container'
import Filter from './Filter'
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({contacts:parseContacts})
    }
   
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
 
  }

  formSubmitHandler = ({name,number}) => {
    const validName = this.state.contacts.find(contact => (
      contact.name === name
    ))
   validName ? alert(`${name} is already in contacts`) : this.addTodo(name,number)
  }
  
  addTodo = (name,number) => {
    const todo = {
      id: uuidv4(),
      name: name,
      number:number
    }
    this.setState(({ contacts }) => (
      {contacts:[todo,...contacts]}
      ))
  }
    
  deleteTodo = todoId => {
  this.setState(prevState => ({
      contacts: prevState.contacts.filter(todo => todo.id !== todoId),
    }));
  }
  
  changeFilter = (event) => {
  
    this.setState({filter:event.currentTarget.value})
  }
  
  getVisibleTodo = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLocaleLowerCase();

   return contacts.filter(todo =>
      todo.name.toLocaleLowerCase().includes(normalizedFilter)
      )
  }
  render() {
   
    
    
    const visibleTodos = this.getVisibleTodo()
    return (
      
      <Container>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter }/>
        <ContactList  contacts={visibleTodos} deleteTodo={this.deleteTodo }/>
      </Container>
    )
  }
}
export default App;
