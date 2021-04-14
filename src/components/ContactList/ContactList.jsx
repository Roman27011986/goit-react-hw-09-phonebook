import styles from './ContactList.module.css'
import backImg from "./memphis-colorful.png"
import { connect } from 'react-redux'
import contactActiion from '../../redux/contacts/contacts-action'
const ContactList = ({ contacts,deleteTodo }) => (
    <ul className={styles.list}>
    {
        contacts.map(({ id, name, number }) => (
            <li key={id} id={styles.cardWrapper} >
            <div id={styles.cardFront} className={styles.card} style={{ backgroundImage:  backImg  }}>
                <div id={styles.cube}>
                        <div className={styles.face || styles.cubeTop} > <p>{name }</p></div>
                        <div className={styles.face || styles.cubeLeft}><p>{name }</p></div>
                    <div className={styles.face || styles.cubeRight}><p>{name }</p></div>
                    </div>
                </div>
            <div id={styles.cardBack} className={styles.card}>
                <div className={styles.details}>
                        <h3>{ number}</h3>
                    
                    
                    </div>
                    <button className={styles.btnRemove} type="button"onClick={() => deleteTodo(id)}>
                        
                    </button>
                </div>
            
        
        </li>

 ))}
</ul>
)

const getVisibleContact = (allContacts,filter) => {  
   
    const normalizedFilter = filter.toLocaleLowerCase();
    
   return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
      )
}
  




const mapStateToProps = ({ contacts: { items, filter } }) => ({
    
    contacts: getVisibleContact(items,filter)
});
    
// const mapStateToProps = state => ({
//     contacts:state.contacts.items
// });

const mapDispatchToProps = (dispatch) => ({
    deleteTodo:(id)=>dispatch(contactActiion.deleteContact(id))
})
    
export default connect(mapStateToProps,mapDispatchToProps)(ContactList) 

