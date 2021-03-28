import PropTypes from 'prop-types';
import styles from './GetNumber.module.css'
const GetNumber = ({ handleChange, value }) => (
    
     <div className={styles.group}>
       <input id='number' className={styles.formItem} value={value } placeholder="0970521180" onChange={handleChange} type="tel"required    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
       title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                         name="number" />
        <span className={styles.bar}></span>
        <label htmlFor='number' className={styles.formLabel} >Number</label>
     </div>
)
GetNumber.propTypes = {
        handleChange:PropTypes.func.isRequired,
        value:  PropTypes.string.isRequired      
}
export default GetNumber