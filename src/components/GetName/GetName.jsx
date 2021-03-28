import PropTypes from 'prop-types';
import styles from './GetName.module.css'
const GetName = ({ handleChange, value }) => (
       <div className={styles.group}>
        <input className={styles.formItem} id='name' placeholder="Jacob Mercer" type="text" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required name="name" value={value} onChange={handleChange} />
        <span className={styles.bar}></span>
        <label className={styles.formLabel} htmlFor='name'>Name</label>
        </div>
)
GetName.propTypes = {
    handleChange:PropTypes.func.isRequired,
    value:  PropTypes.string.isRequired      
}
export default GetName