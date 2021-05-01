import { connect } from 'react-redux'
import {changeFilter} from '../../redux/contacts/contacts-action'
import PropTypes from 'prop-types';
import styles from './Filter.module.css'
import { getFilter } from '../../redux/contacts/contacts-selectors'

import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';


const Filter = ({ value, onChange }) => {
     
   

    return (
       
       
        <div className={styles.group}>
            <TextField
              
                placeholder="Contact name"
                id="outlined-basic"
                label="Filter"
                variant="outlined"
                required value={value}
                onChange={onChange} />
        </div>
  
    
   
    );
   
};
Filter.propTypes = {
    onChange:PropTypes.func.isRequired,
    value:  PropTypes.string.isRequired      
}

const mapStateToProps = (state) => ({
    value: getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => dispatch(changeFilter(event.currentTarget.value))
});
export default connect(mapStateToProps,mapDispatchToProps)(Filter) 