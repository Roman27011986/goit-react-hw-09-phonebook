import { connect } from 'react-redux'
import contactActiion from '../../redux/contacts/contacts-action'
import PropTypes from 'prop-types';
import styles from './Filter.module.css'
const Filter = ({ value, onChange }) => (
    <div className={styles.group}>
        <input id='filter' className={styles.formItem} type="text" required value={value} onChange={onChange} />
        <span className={styles.bar}></span>
        <label htmlFor='filter' className={styles.formLabel}>Filter</label>
    </div>
)
Filter.propTypes = {
    onChange:PropTypes.func.isRequired,
    value:  PropTypes.string.isRequired      
}




const mapStateToProps = (state) => ({
    value: state.contacts.filter
});



const mapDispatchToProps = (dispatch) => ({
    onChange:(event)=>dispatch(contactActiion.changeFilter(event.currentTarget.value))
})
export default connect(mapStateToProps,mapDispatchToProps)(Filter) 